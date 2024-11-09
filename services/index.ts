import { request, gql } from 'graphql-request';
import axios from 'axios';

const graphqlAPI = process.env.NEXT_PUBLIC_COLOMBO_API_ENDPOINT;

export const getTestimonials = async () => {
  const testimonials = gql`
    query GetTestimonials {
      testimonialsConnection(orderBy: createdAt_ASC, first: 100) {
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
            message
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

  const result = await request<TestimonialsResponse | undefined>(
    graphqlAPI!,
    testimonials
  );

  return result?.testimonialsConnection?.edges || [];
};

export const submitTestimonial = async (object: any) => {
  const result = await axios.post('/api/upload', object);

  return result;
};

export interface TestimonialsResponse {
  testimonialsConnection: {
    edges: {
      cursor: string;
      node: Testimonial;
    }[];
  };
}

export interface Testimonial {
  country: string;
  createdAt: string;
  experience: string;
  id: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
  message: string;
  testimonial: {
    raw: any;
  };
  profilePicture: {
    url: string;
  };
}
