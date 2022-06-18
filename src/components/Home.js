import React from "react-router-dom";

const Home = () => {
    return (
        <div>
            <form>
                <input type="text" name="search" id="search" placeholder="Please submit a search!"></input>
                <button type="submit" id="submit">Search...</button>
            </form>
        </div>
    )
}

export default Home;