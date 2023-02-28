import React from "react";

const DashboardTable = ({ data, tableType }) => {
  return (
    <div className="table-container">
      {/* User Table */}
      {tableType === "users" ? (
        <>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}

      {/* Posts Table */}
      {tableType === "posts" ? (
        <>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>State</th>
                  <th>Image URL</th>
                  <th>Contact</th>
                  <th>Location</th>
                  <th>Category</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {/* {console.log(data.data)} */}
                  {data &&
                    data.map((post) => (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td>{post.price}</td>
                        <td>{post.state}</td>
                        <td>{post.image_url}</td>
                        <td>{post.contact}</td>
                        <td>{post.location}</td>
                        {/* <td>{post.category}</td> */}
                        <td>{post.user}</td>
                      </tr>
                    ))}
                </>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}

      {/* Categories Table */}
      {tableType === "categories" ? (
        <>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Subcategory of (ID)</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {console.log(data)}
                  {data &&
                    data.map((category) => (
                      <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>{category.parent_id}</td>
                      </tr>
                    ))}
                </>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardTable;
