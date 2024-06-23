import RemoveBin from "./RemoveBin";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return res.json();
    } catch (error) {
        console.log("Error fetching topics:", error);
        return { topics: [] };  // Return an empty array if there is an error
    }
}

export default async function TopicList() {
    const { topics } = await getTopics() || { topics: [] };  // Handle case where getTopics returns undefined
    return (
        <>
            {topics.map(t => (
                <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 item-start">
                    <div>
                        <h2 className="text-2xl font-bold">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <RemoveBin id={t._id} />
                        <Link href={`/editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
