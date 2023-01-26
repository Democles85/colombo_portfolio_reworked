import { ElementNode } from '@graphcms/rich-text-types';

type TestimonialTypes = {
  testimonials: [
    {
      cursor: string;
      node: {
        country: string;
        createdAt: string;
        email: string;
        experience: string;
        id: string;
        name: string;
        phoneNumber: number;
        publishedAt: string;
        updatedAt: string;
        testimonial: {
          raw: {
            children: ElementNode[];
          };
        };
        profilePicture: {
          url: string;
        };
      };
    }
  ];
};

export default TestimonialTypes;
