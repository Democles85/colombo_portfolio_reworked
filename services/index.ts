import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_COLOMBO_API_ENDPOINT;

export const getTestimonials = async () => {
  const testimonials = gql`
    query GetTestimonials {
      testimonialsConnection {
        edges {
          cursor
          node {
            country
            createdAt
            experience
            id
            name
            publishedAt
            updatedAt
            testimonial {
              raw
            }
            profilePicture {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI!, testimonials);

  return result.testimonialsConnection.edges;
};

export const submitTestimonial = async (object: any) => {
  const result = await fetch('/api/upload', {
    method: 'POST',
    body: object,
  });

  return result.json();
};