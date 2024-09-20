import emailWrapper from "./index";

export const resetPasswordMail = (token: string) => {
  return emailWrapper(`
    <h2 style="text-align: center">Reset Your Password</h2>
        <p style="color: #666; font-size: 16px">Hi there,</p>
        <p style="color: #666; font-size: 16px">
          We received a request to reset your password. Please click the link
          below to reset your password:
        </p>
        <p style="margin: 16px auto; text-align: center">
          <a
            href="${process.env.WEB_URL}/auth/reset-password/${token}"
            style="
              background-color: #007bff;
              border-radius: 4px;
              color: #fff;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              padding: 10px 16px;
              text-decoration: none;
            "
            >Reset Password</a
          >
        </p>
        <p style="color: #666; font-size: 16px">
          If you did not request a password reset, you can ignore this email and
          your password will not be changed.
        </p>
        <p style="color: #666; font-size: 16px">Thank you,</p>
        <p style="color: #666; font-size: 16px; margin-bottom: 0">
          The ${process.env.APPLICATION_NAME} Team
        </p>
    `);
};
