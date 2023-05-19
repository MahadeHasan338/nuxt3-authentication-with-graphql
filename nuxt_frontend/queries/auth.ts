export const logInMutation = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

// export const fetchUserProfileQuery = gql`
//   query ($id: String!, $email: String!) {
//     users(id: $id, email: $email) {
//       edges{
//         node
//         {
//           name
//           username
//           email
//         }
//       } 
//    }
// `;

export const logOutMutation = gql`
  mutation {
    deleteTokenCookie {
      deleted
    }
  }
`;

export const SignUpMutation = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    createOrUpdateUser(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
      }
    }
  }
`;

export const resetPasswordMutation = gql`
  mutation ($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
    }
  }
`;

export const setNewPasswordMutation = gql`
  mutation ($newPassword: String!, $token: String!) {
    resetPassword(newPassword: $newPassword, token: $token) {
      success
    }
  }
`;
