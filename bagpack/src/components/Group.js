import "../styles/group.css"
import SearchIcon from '@mui/icons-material/Search';

function Group() {
  const groups = [
    { id: 1, name: "Traveling in Europa", members: "Public-1 member" },
    { id: 2, name: "Traveling in Europa", members: "Public-2 member" },
    { id: 3, name: "Traveling in Europa", members: "Public-3 member" }
  ]
    return (
      <div className="groupContain">
        <div className="groupContainTwo">
          <h1>THENORTHPOLE COMMUNITY</h1>
          <div className="feedContain">
            <div className="groupsFeed">Groups Feed</div>
          </div>
          <div className="contain-feed">
            <div className="groupLeft">
              <div className="boldFont">No Posts to Show</div>
              <p>
                Check out the available groups for you to join and start
                posting.
              </p>
            </div>
            <div className="groupRight">
              <div className="searchContain">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <input type="text" placeholder="Search for groups" />
              </div>
              <h3>Suggested Groups</h3>
              {groups.map((group) => (
                <div key={group.id} className="groupAll">
                  <div>
                    <img
                      src={`https://source.unsplash.com/32x32/?${group.id}`}
                      alt={`Group ${group.id}`}
                    />
                  </div>
                  <div>
                    <h5>{group.name}</h5>
                    <p>{group.members}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Group;