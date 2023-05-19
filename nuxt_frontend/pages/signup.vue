<script setup lang="ts">
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

const username = ref("");
const email = ref("");
const password = ref("");

const schema = yup.object({
  username: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]+$/,
      "This field only contains alpha-numeric characters"
    )
    .required()
    .label("Username"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

const authStore = useAuthStore();
const { signUp } = authStore;

const onSubmit = async () => {
  await signUp({
    username: username.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <v-row class="h-100vh">
    <v-col
      cols="12"
      lg="7"
      xl="6"
      class="bg-primary d-none d-md-flex align-center justify-center"
    >
      <v-container>
        <div class="pa-10">
          <v-row justify="center">
            <v-col cols="8" xl="5">
              <div>
                <h2 class="text-h4 text-white font-weight-medium">
                  Get started with your account
                </h2>
                <h6
                  class="text-subtitle-1 mt-4 text-white text-high-emphasis font-weight-regular"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia eaque delectus nihil a voluptatum illum fugit,
                  explicabo exercitationem.
                </h6>
                <v-btn
                  class="mt-6 text-capitalize"
                  size="x-large"
                  variant="outlined"
                  color="white"
                  >Learn More</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12" lg="5" xl="6" class="d-flex align-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row>
            <v-col cols="12" lg="9" xl="6">
              <img src="@/assets/images/logos/dark-logo-icon.svg" />
              <h2 class="font-weight-bold mt-4 blue-grey--text text--darken-2">
                Sign Up
              </h2>
              <h6 class="text-subtitle-1 text-grey-darken-1">
                Already have an account?
                <v-btn
                  variant="plain"
                  to="/"
                  class="text-primary text-decoration-none"
                  >Sign In</v-btn
                >
              </h6>

              <Form
                as="v-form"
                :validation-schema="schema"
                @submit="onSubmit"
                lazy-validation
              >
                <Field
                  v-model="username"
                  name="username"
                  v-slot="{ field, errors }"
                >
                  <v-text-field
                    v-bind="field"
                    :error-messages="errors"
                    label="Username"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field
                ></Field>

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

                <Field
                  name="password"
                  v-model="password"
                  v-slot="{ field, errors }"
                >
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
                  >Sign Up</v-btn
                >
              </Form>
              <div class="text-center mt-6">
                <div class="tw-flex tw-align-center tw-justify-center tw-gap-2">
                  <v-btn icon color="secondary">
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn icon color="primary">
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>