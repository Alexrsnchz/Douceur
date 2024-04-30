function PostCard({ title, content, postImg, user_id }) {
  return (
    <section className="max-w-sm mx-auto bg-white shadow-lg rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="px-4 pt-4">
        <img
          src={postImg}
          alt={title}
          className="w-full h-40 object-cover object-center rounded"
        />
      </div>
      <div className="p-4">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="mt-2 text-gray-700 line-clamp-3">{content}</p>
        <div className="mt-4 flex justify-end items-center">
          <p className="px-1">
            <span className="text-[#d4a373] font-semibold">{user_id}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PostCard;
