<script setup lang="ts">
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

const route = useRoute();
const password = ref("");
const schema = yup.object({
    password: yup.string().min(4).required().label("Password"),
});

const authStore = useAuthStore();
const { setNewPassword } = authStore;
const onSubmit = () => {
    setNewPassword({ newPassword: password.value, token: `${route?.params?.token}` });
};
</script>

<template>
  <div class="tw-flex tw-justify-center tw-items-center h-screen">
    <v-card class="tw-w-1/2 pa-10" elevation="5">
      <v-card-text class="pa-0 mb-5">
        <h3 class="title text-h6">Reset Password</h3>
        <h6 class="text-subtitle-1 text-grey-darken-1">
          Please enter your new password.
        </h6>
      </v-card-text>
      <v-divider></v-divider>
      <Form
        as="v-form"
        :validation-schema="schema"
        @submit="onSubmit"
        lazy-validation
      >
        <Field name="password" v-model="password" v-slot="{ field, errors }">
          <v-text-field
            v-bind="field"
            :error-messages="errors"
            label="Password"
            class="mt-4"
            required
            variant="outlined"
            type="password"
          ></v-text-field
        ></Field>

        <v-btn color="primary" block class="py-6 mt-4" type="submit"
          >Submit</v-btn
        >
      </Form>
    </v-card>
  </div>
</template>
