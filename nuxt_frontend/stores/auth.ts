import { ApolloError } from "@apollo/client";
import { defineStore } from "pinia";
import { LogIn, LogOut, SignUp } from "@/types/auth";
import {
  logInMutation,
  // fetchUserProfileQuery,
  logOutMutation,
  SignUpMutation,
  resetPasswordMutation,
  setNewPasswordMutation
} from "@/queries/auth";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const { onLogin, onLogout } = useApollo();

  const token = ref("");
  const authUser = ref();

  const loggedIn = computed(() => token.value);
  const getUserProfile = computed(() => authUser.value);

  const setToken = (item: string) => {
    token.value = item;
    onLogin(item);
  };

  const logIn = async ({ username, password }: any) => {
    const variables = { username, password };
    const { mutate: onLogInDone, onError: onLogInError } = useMutation<LogIn>(
      logInMutation,
      { variables }
    );

    const { data }: any = await onLogInDone();
    if (data?.tokenAuth) {
      setToken(data?.tokenAuth?.token ?? "");
      // fetchUserProfile({ token: data?.tokenAuth?.token });
      router.push("/dashboard");
      setPageLayout("custom");
    }

    onLogInError((error: ApolloError) => {
      console.log(error.message || "Something is wrong!");
    });
  };

  // const fetchUserProfile = async ({ token }: any) => {
  //   const variables = { token };
  //   const { onResult: onFetchAuthUserDone } = useQuery(
  //     fetchUserProfileQuery,
  //     variables
  //   );

  //   onFetchAuthUserDone(async ({ data }: any) => {
  //     await setAuthUserProfile(data);
  //   });
  // };

  // const setAuthUserProfile = async(payload: any) => {
  //   authUser.value = payload;
  // }

  const logOut = async () => {
    const { mutate: onLogOutDone, onError: onLogOutError } =
      useMutation<LogOut>(logOutMutation);

    const { data }: any = await onLogOutDone();
    if (data?.deleteTokenCookie) {
      setToken("");
      onLogout();
      setPageLayout("default");
      router.push("/");
    }

    onLogOutError((error: ApolloError) => {
      console.log(error.message || "Something is wrong!");
    });
  };

  const signUp = async ({ username, email, password }: any) => {
    const variables = { username, email, password };
    const { mutate: onSignUpDone, onError: onSignUpError } = useMutation<SignUp>(
      SignUpMutation,
      { variables }
    );

    const { data }: any = await onSignUpDone();
    if (data?.createOrUpdateUser) {
      console.log("Registration successful");
      router.push("/");
    }

    onSignUpError((error: ApolloError) => {
      console.log(error.message || "Something is wrong");
    });
  };

  const resetPassword = async ({ email }: any) => {
    const variables = { email };
    const { mutate: onResetPasswordDone, onError: onResetPasswordDoneError } = useMutation(
      resetPasswordMutation,
      { variables }
    );

    const { data }: any = await onResetPasswordDone();
    if (data?.sendPasswordResetEmail) {
      console.log("Please check your email");
    }

    onResetPasswordDoneError((error: ApolloError) => {
      console.log(error.message || "Something is wrong");
    });
  };

  const setNewPassword = async ({ newPassword, token }: any) => {
    const variables = { newPassword, token };
    const { mutate: onSetNewPasswordDone, onError: onSetNewPasswordError } = useMutation(
      setNewPasswordMutation,
      { variables }
    );

    const { data }: any = await onSetNewPasswordDone();
    if (data?.resetPassword?.success) {
      router.push("/")
    }else{
      console.log("Your token is not valid")
    }

    onSetNewPasswordError((error: ApolloError) => {
      console.log(error.message || "Something is wrong");
    });
  };

  return {
    loggedIn,
    getUserProfile,
    setToken,
    logIn,
    logOut,
    signUp,
    resetPassword,
    setNewPassword,
  };
});
