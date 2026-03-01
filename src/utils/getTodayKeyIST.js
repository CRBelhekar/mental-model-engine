export const getTodayKeyIST = () => {
    const now = new Date();

    const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    const month = String(istTime.getMonth() + 1).padStart(2, "0");
    const day = String(istTime.getDate()).padStart(2, "0");

    return `${month}-${day}`;
};
