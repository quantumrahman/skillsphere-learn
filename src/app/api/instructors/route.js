import instructor from "@/data/instructor.json";

export const GET = async () => {
    return Response.json(instructor);
};