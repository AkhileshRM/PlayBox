import React from "react";

const commentsData = [
  {
    name: "Alice",
    text: "This is the first comment",
    replies: [
      {
        name: "Bob",
        text: "Replying to Alice",
        replies: [
          {
            name: "Charlie",
            text: "Nested reply to Bob",
            replies: [
              {
                name: "Grace",
                text: "Further nested reply to Charlie",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Dave",
        text: "Another reply to Alice",
        replies: [
          {
            name: "Hannah",
            text: "Replying to Dave",
            replies: [
              {
                name: "Ian",
                text: "Replying to Hannah",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Eve",
    text: "Second top-level comment",
    replies: [
      {
        name: "Frank",
        text: "Replying to Eve",
        replies: [
          {
            name: "Judy",
            text: "Nested reply to Frank",
            replies: [
              {
                name: "Kevin",
                text: "Replying to Judy",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-12 w-12"
        src="https://iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {comment.replies && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
