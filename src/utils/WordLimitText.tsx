import Link from "next/link";

const WordLimitText = ({
  text,
  id,
  limit = 10,
}: {
  text: string;
  id: number;
  limit?: number;
}) => {
  const words = text.trim().split(" ");
  const isLong = words.length > limit;
  const preview = isLong ? words.slice(0, limit).join(" ") + "..." : text;

  return (
    <p className="text-gray-600 text-sm mb-4">
      {preview}{" "}
      {isLong && (
        <Link
          href={`/projects/${id}`}
          className="text-blue-600 underline ml-1 hover:text-blue-800 transition"
        >
          Read More
        </Link>
      )}
    </p>
  );
};
export default WordLimitText;