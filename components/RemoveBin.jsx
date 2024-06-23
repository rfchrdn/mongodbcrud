'use client';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBin({id}){
    const router = useRouter();
    const removeTopic = async () => {
        const confirm = window.confirm("Are you sure you want to delete this topic?");
        if(confirm){
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });

            if(!res.ok){
                throw new Error("Failed to delete topic");
            }

            router.refresh();
        }
    }
    return (
        <div>
            <button onClick={removeTopic} className="text-red-400">
                <HiOutlineTrash size={24} />
            </button>
        </div>
    )
}