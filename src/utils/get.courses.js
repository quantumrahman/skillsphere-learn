export const getCourses = async () => {
    const res = await fetch('https://skillsphere-rrdev.vercel.app/api/courses', {
        cache: "force-cache"
    });

    return res.json();
};