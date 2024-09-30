import { rest } from "msw"

const baseURL = "https://kinnect-api-cf0f665319fa.herokuapp.com/"


export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json(
                {
                    "pk": 14,
                    "username": "Johnny",
                    "email": "",
                    "first_name": "",
                    "last_name": "",
                    "profile_id": 14,
                    "profile_image": "https://res.cloudinary.com/dxfpqnmtu/image/upload/v1/media/images/1360771_vnpjxz"
                }
            )
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(
            ctx.status(200)
        );
    }),
];