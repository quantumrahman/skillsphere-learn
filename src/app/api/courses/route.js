import courses from "@/data/courses.json";

export const GET = async () => {
    return Response.json(courses);
};