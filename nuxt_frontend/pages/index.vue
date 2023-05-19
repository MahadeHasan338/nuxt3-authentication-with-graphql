<script setup lang="ts">
import { Field, Form } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";

definePageMeta({
  layout: "default",
});

const username = ref("");
const password = ref("");
const checkbox = ref("");

const schema = yup.object({
  username: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]+$/,
      "This field only contains alpha-numeric characters"
    )
    .required()
    .label("Username"),
  password: yup.string().min(4).required().label("Password"),
});

const authStore = useAuthStore();
const { logIn } = authStore;
const onSubmit = () => {
  logIn({ username: username.value, password: password.value });
};
</script>

<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col lg="11" sm="8" xl="7">
        <v-card elevation="10">
          <v-row>
            <v-col
              lg="7"
              class="bg-primary d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10 v-col-8">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      Welcome Back🙂
                    </h2>
                    <h6
                      class="text-subtitle-1 text-high-emphasis mt-4 text-white font-weight-regular"
                    >
                      To keep connected with us please log in with your personal
                      information
                    </h6>
                    <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >Learn More</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
            <v-col lg="5">
              <div class="pa-7 pa-sm-12">
                <img src="@/assets/images/logos/dark-logo-icon.svg" />
                <h2 class="font-weight-bold mt-4 text--darken-2">Sign in</h2>
                <h6 class="text-subtitle-1 mb-7">
                  Don't have an account?
                  <v-btn to="/signup" variant="plain">Sign Up</v-btn>
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

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Remember me?"
                      required
                      hide-details
                    ></v-checkbox>
                    <div class="ml-auto">
                      <NuxtLink
                        to="/reset-password"
                        class="text-primary text-decoration-none"
                        >Forgot Password?
                      </NuxtLink>
                    </div>
                  </div>

                  <v-btn color="primary" block class="py-6 mt-4" type="submit"
                    >Sign In</v-btn
                  >
                </Form>
                <div class="text-center mt-6">
                  <div
                    class="tw-flex tw-align-center tw-justify-center tw-gap-2"
                  >
                    <v-btn icon color="primary">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="error">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
