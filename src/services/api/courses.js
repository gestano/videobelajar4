import client from "./client";

const resource = "/courses";

export const listCourses = (params) =>
client.get(resource, { params }).then((r) => r.data);

export const getCourse = (id) =>
client.get(`${resource}/${id}`).then((r) => r.data);

export const createCourse = (data) =>
client.post(resource, data).then((r) => r.data);

export const updateCourse = (id, data) =>
client.put(`${resource}/${id}`, data).then((r) => r.data);

export const deleteCourse = (id) =>
client.delete(`${resource}/${id}`).then((r) => r.data);