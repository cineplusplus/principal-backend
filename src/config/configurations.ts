export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  url_backend: process.env.URL_BACKEND,
  url_frontend: process.env.URL_FRONTEND,
  database: {
    url: process.env.DATABASE_URL,
    type: process.env.DATABASE_TYPE,
  },
  jwt: {
    secret_token: process.env.SECRET_TOKEN_JWT,
    token_time_admin: process.env.TOKEN_TIME_ADMIN,
    token_time_user: process.env.TOKEN_TIME_USER,
  },
  media: {
    folder_name: process.env.FOLDER_MEDIA_NAME,
    folder_name_productions: process.env.FOLDER_MEDIA_NAME_PRODUCTIONS,
    url_name: process.env.URL_MEDIA_NAME,
    single_file_key_multer: process.env.SINGLE_FILE_KEY_MULTER,
    mullt_file_key_multer: process.env.MULT_FILE_KEY_MULTER,
  },
  prisma: {
    key: process.env.OBJECT_KEY_TO_VERIFICATE_PRISMA_CONNECTION,
  },
  nms: {
    app_name: process.env.NMS_APP_NAME,
    auth_key: process.env.NMS_AUTH_KEY,
    api_user: process.env.NMS_API_USER,
    api_pass: process.env.NMS_API_PASS,
    part_http: process.env.NMS_PORT_HTTP,
  },
  email: {
    email: process.env.EMAIL_NODEMAILER,
    password: process.env.PASSWORD_NODEMAILER,
  },
  stream: {
    start_time: process.env.STARTTIME,
    end_time: process.env.ENDTIME,
  },
});
