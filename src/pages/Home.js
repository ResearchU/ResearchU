import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
// import { tempData } from "../components/ExampleResearchPosts";
import ResearchResult from './../components/ResearchResult';
import OrderForm from './../components/OrderForm';
import FilterBar from "../components/FilterBar";
import { MdViewColumn, MdTableRows, MdDateRange } from "react-icons/md";
import animatedLogo from "../images/logo.gif";

function Home() {
  // const data = tempData;
  const [data, setData] = useState([]);

  const icon1 = <MdTableRows />
  const icon2 = <MdTableRows />
  const [order, setOrder] = useState('');
  //Need to add a useState for button
  function handleChange(event) {
    setOrder({ value: event.target.value });
  }

  const [allData, setAllData] = useState(data);
  const generateMajorDataForDropdown = () => {
    return ["Computer Science", "Chemistry", "Physics", "Mathematics"];
    // return [...new Set(data.map((item) => item.major))];
  };
    
//   const[research, setResearch] = useState({name: " "});
//     useEffect(() => {
//       const fetchData = async () => {
//         const result = await fetch(`api/research`);
//         const body = await result.json();
//         setResearch(body);
//       }
//   fetchData();
//   }, []);
//   const data = Array.from(research);

//   const icon1 = <MdTableRows/>
//   const icon2 = <MdTableRows/>
//   const [order, setOrder] = useState('');
//     //Need to add a useState for button
//     function handleChange(event){
//         setOrder({value: event.target.value});
//     }

//   const [allData, setAllData] = useState(data);
//   const generateMajorDataForDropdown = () => {
//     return [...new Set(data.map((item) => item.requirements.major))];
//   };

  const generateSemesterDataForDropdown = () => {
    return ["Fall 2021", "Spring 2022", "Fall 2022"];
    return [...new Set(data.map((item) => item.semester))];
  };

  const handleFilterMajor = (year, gpa, major, isOnline, semester, fromDate, toDate) => {
    const filteredData = data.filter((item) => {
      
      // Older stuff
      let item_fromDateObj = new Date(item.fromDate);
      let item_toDateObj = new Date(item.toDate);
      let fromDateObj = new Date(fromDate);
      let toDateObj = new Date(toDate);

      if ((item.requirements.year.includes(year) || 0 === year) && 
      (item.requirements.major.includes(major) || 0 === major.length) && 
      (item.requirements.gpa <= gpa) && 
      (item.isOnline === isOnline || "" === isOnline) && 
      (item.semester === semester || "" === semester) && 
      ((fromDateObj <= item_fromDateObj && item_toDateObj <= toDateObj) || (fromDate === "" || toDate === ""))) {

      
//       if ((item.requirements.year === year || "" === year) && (item.requirements.major === major || "" === major) && (item.requirements.gpa <= gpa)
//         && (item.isOnline === isOnline || "" === isOnline) && (item.semester === semester || "" === semester)
//         ) { //(item.fromDuration === duration)
//           console.log(isOnline)

        return item;
      }
    });

    setAllData(filteredData);
  };

    if(order.value === "Ascending"){
        allData.sort((a, b) => parseFloat(a._id) - parseFloat(b._id))
    }
    else{
        allData.sort((a, b) => parseFloat(b._id) - parseFloat(a._id))
    }

  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container">
          <div className="home__img">
            <img src={animatedLogo} alt="Animated ResearchU logo" />
          </div>
          <div className="home__data">
            <h1 className="home__title">Research is just a click away!</h1>
          </div>
          <div className="home_container">
            <div className="search-bar">
              <div className="">
                <SearchBar setData={setData} setAllData={setAllData} />
              </div>
            </div>

            <div className="filters">
              <div className="">
                <div>
                  <FilterBar
                    majors={generateMajorDataForDropdown()}
                    semesters={generateSemesterDataForDropdown()}
                    onAllFilter={handleFilterMajor}
                  ></FilterBar>
                </div>
              </div>
            </div>

            <div className="cards-wrapper">
              <div className="listing">
                <h1>Results</h1>
                <div className="sorting">
                  <h1>Sort By:</h1>
                  <div className="select-dropdown">
                    <OrderForm update={handleChange.bind(this)} cur={order.value} />
                  </div>

                  <div className="sort-icon">

                    <div className="original-icon">{icon1}</div>
                    <div className="rotate-icon">{icon2}</div>

                  </div>

                </div>

              </div>
              {allData.map((item) => (
                <ResearchResult result={item} key={item._id} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;