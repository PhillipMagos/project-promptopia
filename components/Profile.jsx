import PromptCArd from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name}Profile</span>
      </h1>
      <p className="des text-left">{desc}</p>
      <div className="mt-16 prompt_layout">
        {data.map((posts) => (
          <PromptCard
            key={posts.id}
            posts={posts}
            handleEdit={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile