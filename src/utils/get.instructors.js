export const getInstructors = async () => {
    const res = await fetch('https://skillsphere-rrdev.vercel.app/api/instructors', {
        cache: "force-cache"
    });

    return res.json();
};