import React from "react";
import Project from "./Project";
import Blogs from "./Blogs";
import SkillSection from "./SkillSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
    return(
        <div>
            <Title name="Garikipati Jahnavi" leadText="I am a enthusiastic learner"/>
            <RecommendationSection />
            <SkillSection />
            <Project />
            <About />
            <Blogs />
        </div>
    );
}

export default HomePage;