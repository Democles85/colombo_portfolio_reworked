import FormData from 'form-data';
import fs from 'fs';
import { gql, GraphQLClient } from 'graphql-request';
import axios from 'axios';

import initMiddleware from '../../middleware/init-middleware';
import parseMultipartForm from '../../middleware/multipartParser';

export const config = {
  api: {
    bodyParser: false,
  },
};

const multipartParser = initMiddleware(parseMultipartForm);

const graphqlAPI = process.env.NEXT_PUBLIC_COLOMBO_API_ENDPOINT;
const graphqlToken = process.env.GRAPHCMS_TOKEN;

export default async function handler(req: any, res: any) {
  const client = new GraphQLClient(graphqlAPI!, {
    headers: {
      authorization: `Bearer ${graphqlToken}`,
    },
  });

  await multipartParser(req, res);

  const { file_1 } = req.files;
  const form = new FormData();
  form.append('fileUpload', fs.createReadStream(file_1.filepath));
  // const upload = await fetch(`${graphqlAPI}/upload`, {
  //   method: 'POST',
  //   headers: {
  //     authorization: `Bearer ${graphqlToken}`,
  //   },
  //   // @ts-ignore
  //   body: form,
  // }).then(res => res.json());

  const upload = await axios
    .post(`${graphqlAPI}/upload`, form, {
      headers: {
        authorization: `Bearer ${graphqlToken}`,
        ...form.getHeaders(),
      },
    })
    .then(res => res.data);

  const { name, email, message, country } = req.body;
  let id = upload.id;
  const testimonialObject = {
    name,
    email,
    message,
    country,
    id,
  };

  console.log(testimonialObject);

  const query = gql`
    mutation CreateTestimonial(
      $name: String!
      $email: String!
      $message: String!
      $country: String!
      $id: ID!
    ) {
      createTestimonial(
        data: {
          name: $name
          email: $email
          message: $message
          country: $country
          profilePicture: { connect: { id: $id } }
        }
      ) {
        id
      }
    }
  `;

  try {
    await client.request(query, testimonialObject);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
}
