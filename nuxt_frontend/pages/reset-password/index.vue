<script setup lang="ts">
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const schema = yup.object({
  email: yup.string().required().email().label("Email"),
});

const authStore = useAuthStore();
const { resetPassword } = authStore;
const onSubmit = () => {
  resetPassword({ email: email.value });
};
</script>

<template>
  <div class="tw-flex tw-justify-center tw-items-center h-screen">
    <v-card class="tw-w-1/2 pa-10" elevation="5">
    <v-card-text class="pa-0 mb-5">
      <h3 class="title text-h6">Reset Password</h3>
      <h6 class="text-subtitle-1 text-grey-darken-1">
        Forgot your password? Please enter your email to reset password.
      </h6>
    </v-card-text>
    <v-divider></v-divider>
    <Form
      as="v-form"
      :validation-schema="schema"
      @submit="onSubmit"
      lazy-validation
    >
      <Field v-model="email" name="email" v-slot="{ field, errors }">
        <v-text-field
          v-bind="field"
          :error-messages="errors"
          label="E-mail"
          class="mt-4"
          required
          variant="outlined"
        ></v-text-field
      ></Field>

      <v-btn color="primary" block class="py-6 mt-4" type="submit"
        >Submit</v-btn
      >
    </Form>
  </v-card>
  </div>
  
</template>
