import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/blog/blog1.jpg`,
      title: "Giving The Poor Is A Great Satisfaction Of Heart.",
      authorImage: `${process.env.PUBLIC_URL}/blog/person1.jfif`,
      authorName: "Jenefer Willy",
      comments: 35,
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/blog/blog2.jpg`,
      title: "Your Help Can Make Someone’s Life Easier.",
      authorImage: `${process.env.PUBLIC_URL}/blog/person2.jfif`,
      authorName: "Konal Biry",
      comments: 80,
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/blog/blog3.jpg`,
      title: "Give Education, It’s The Best Gift Ever.",
      authorImage: `${process.env.PUBLIC_URL}/blog/person3.jfif`,
      authorName: "Jenefer Willy",
      comments: 95,
    },
  ];

  return (
    <div>
      <section className="sectionBlog">
        <div className="containerCampaigns">
          <div className="textBoxCampaigns textBoxCampaignsBlog">
            <span className="subTitleCampaigns">Our Blog</span>
            <h2 className="headingCampaigns">Latest News & Update</h2>
            <p className="paragraphCampaigns">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="campaignsCardBox">
            {blogPosts.map((post) => (
              <div className="blogCardItem" key={post.id}>
                <div className="blogCardImgBox">
                  <img className="cardImg" src={post.image} alt="blogPerson" />
                </div>
                <div className="blogCardBox">
                  <h2 className="cardTitle">{post.title}</h2>
                </div>
                <div>
                  <div className="cardDetailsBox blogDetailsBox">
                    <div className="cardDetails">
                      <img
                        className="cartImgPerson"
                        src={post.authorImage}
                        alt="blogPerson"
                      />
                      <span className="blogName">{post.authorName}</span>
                    </div>
                    <div className="blogDetails">
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        className="blogIcon"
                      />
                      <span className="blogNumber">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
