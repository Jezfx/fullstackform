import type { Meta, StoryObj } from "@storybook/react";

import { PageContactForm } from "./page-contact-form";

const meta = {
  title: "Web/Pages/Contact",
  component: PageContactForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formAction: () => {},
    pending: false,
    state: { data: {} },
  },
};

export const Loading: Story = {
  args: {
    pending: true,
    formAction: () => {},
    state: {
      data: {
        message: "Hello",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    },
  },
};

export const Error: Story = {
  args: {
    pending: false,
    formAction: () => {},
    state: {
      errors: {
        fields: {
          firstName: "First name is required",
          lastName: "Last name is required",
          email: "Email is required",
          message: "Message is required",
        },
      },
      data: {
        message: "Hello",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    },
  },
};
