import "../styles/example.route.css";
import "../styles/globals.css";
import AboutBlock from "@/components/blocks/AboutBlock.tsx";
import Ari from "@/assets/headshots/Ari.png";
import Katy from "@/assets/headshots/Katy.jpg";
import Phong from "@/assets/headshots/Phong.jpg";
import Lap from "@/assets/headshots/Lap.jpg";
import Trang from "@/assets/headshots/Trang.jpg";
import Mina from "@/assets/headshots/Mina.jpg";
import Henry from "@/assets/headshots/Henry.jpg";
import June from "@/assets/headshots/June.jpg";
import Tracy from "@/assets/headshots/Tracy.jpg";
import Sandi from "@/assets/headshots/Sandi.png";
import Kraemling from "@/assets/headshots/Kraemling.jpg";
import Shettler from "@/assets/headshots/Shettler.png";
import Owen from "@/assets/headshots/Owen.jpg";
import WPI_Logo from "@/assets/WPI_Logo.png";
import Wong from "@/assets/headshots/Wong.png";
import { Card } from "@/components/ui/card.tsx";

// import wongAsters from "@/assets/wongSunFlower.png";
// import wongSunflower from "@/assets/wongAsters.png";

const AboutMePage = () => {
  return (
    <div>
      <div className="about-the-team w-5/6 pt-2 pb-5 gap-5 m-auto">
        <h1 className="text-2xl font-bold my-2 text-center">Our Team</h1>
        <Card className="team-members-flex p-5">
          <div className={"flex flex-row pt-10 pb-5 justify-between"}>
            <AboutBlock
              Name={"Phong Cao"}
              role={"Team Lead"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2027"}
              major={"CS & DS"}
              Email={"pcao@wpi.edu"}
              Github={"https://github.com/PhongCT1105"}
              Linkdin={"https://www.linkedin.com/in/phong-cao/"}
              Imagepath={Phong}
              quote={""}
            />

            <AboutBlock
              Name={"Alexander Lap"}
              role={"Frontend Lead"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS"}
              Email={"ajlap@wpi.edu"}
              Github={"https://github.com/alexanderjlap"}
              Linkdin={"https://www.linkedin.com/in/alexanderlap/"}
              Imagepath={Lap}
              quote={'"Stay strapped or get clapped" - Sun Tzu'}
            />
            <AboutBlock
              Name={"Trang Tran"}
              role={"Backend Lead"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS & IMGD"}
              Email={"tntran@wpi.edu"}
              Github={"https://github.com/tsnhim"}
              Linkdin={"https://www.linkedin.com/in/tntran03/"}
              Imagepath={Trang}
              quote={""}
            />
          </div>
          <div className={"flex flex-row pt-10 pb-5 justify-between"}>
            <AboutBlock
              Name={"Mina Boktor"}
              role={"Frontend Engineer"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS"}
              Email={"mboktor@wpi.edu"}
              Github={"https://github.com/minaboktor2628"}
              Linkdin={"https://www.linkedin.com/in/mina-boktor-108126211/"}
              Imagepath={Mina}
              quote={'"It\'s just math" - Phong'}
            />
            <AboutBlock
              Name={"Henry Solomon"}
              role={"Frontend Engineer"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS"}
              Email={"hjsolomon@wpi.edu"}
              Github={"https://github.com/hjsolomon"}
              Linkdin={"https://www.linkedin.com/in/hjsolomon/"}
              Imagepath={Henry}
              quote={'"Real G\'s move in silence like lasagna" - Lil Wayne'}
            />
            <AboutBlock
              Name={"June Whittall"}
              role={"Backend Engineer"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS & IMGD"}
              Email={"jwhittall@wpi.edu"}
              Github={"https://github.com/jwwhittall"}
              Linkdin={""}
              Imagepath={June}
              quote={
                '"Do you remember that old lake? The one by Santa Fe?" -Dean Summerwind'
              }
            />
          </div>
          <div className={"flex flex-row pt-10 pb-5 justify-between"}>
            <AboutBlock
              Name={"Tracy Yang"}
              role={"Algorithms Enginner"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2025"}
              major={"RBE"}
              Email={"tdyang@wpi.edu"}
              Github={"https://github.com/tdyang"}
              Linkdin={"https://www.linkedin.com/in/tracy-yang-b61b72211/"}
              Imagepath={Tracy}
              quote={'"ware are yew" -blink-182'}
            />
            <AboutBlock
              Name={"Alexsandra Antoski"}
              role={"Project Manager"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2025"}
              major={"CS"}
              Email={"aantoski@wpi.edu"}
              Github={"https://github.com/aantoski"}
              Linkdin={
                "https://www.linkedin.com/in/alexsandra-antoski-9b7a242a4/"
              }
              Imagepath={Sandi}
              quote={
                "\"We don't have to do everything in order to be everything, " +
                'because we are already infinite. While we are alive we always contain a future of multifarious possibility." - Matt Haig'
              }
            />
            <AboutBlock
              Name={"Alexander Kraemling"}
              role={"Product Owner"}
              devrole={"Full-Stack Engineer"}
              ClassYear={"2026"}
              major={"CS & RBE"}
              Email={"ajkraemling@wpi.edu"}
              Github={"https://github.com/ajkraemling"}
              Linkdin={
                "https://www.linkedin.com/in/alexander-kraemling-aa9b42214/"
              }
              Imagepath={Kraemling}
              quote={'"I don\'t think I can take any more" - Jon Arbuckle'}
            />
          </div>
          <div className={"mx-auto w-3/5"}>
            <div className={"flex flex-row pt-10 pb-5 justify-between "}>
              <AboutBlock
                Name={"Alexander Shettler"}
                role={"Scrum Master"}
                devrole={"Full-Stack Engineer"}
                ClassYear={"2026"}
                major={"CS"}
                Email={"aeshettler@wpi.edu"}
                Github={"https://github.com/alexshettler"}
                Linkdin={""}
                Imagepath={Shettler}
                quote={
                  '"You have never been given sufficient evidence that worms can\'t fly" - Sun Tzu'
                }
              />
              <AboutBlock
                Name={"Owen Lacey"}
                role={"Documentation Analyst"}
                devrole={"Full-Stack Engineer"}
                ClassYear={"2025"}
                major={"IMGD Tech"}
                Email={"oelacey@wpi.edu"}
                Github={"https://github.com/echoct21"}
                Linkdin={"https://www.linkedin.com/in/owen-lacey-721205250/"}
                Imagepath={Owen}
                quote={
                  "\"Belief, truth, honor: the moment these exist only to get you something is the moment you've " +
                  'missed the point." - Brandon Sanderson'
                }
              />
            </div>
          </div>
        </Card>
        <h1 className="text-2xl font-bold my-2 mt-6 text-center">Faculty</h1>
        <Card className="faculty-flex p-5">
          <div className={"flex flex-row pt-10 pb-5 justify-between"}>
            <AboutBlock
              Name={"Wilson Wong"}
              role={"Professor"}
              Email={"wwong2@wpi.edu"}
              Github={"https://github.com/wwong2"}
              Linkdin={"https://www.linkedin.com/in/wilson-wong-wpi/"}
              Imagepath={Wong}
              quote={
                '"No matter how bad a situation may be, with careful thought it can be turned into an advantage."'
              }
            />
            <AboutBlock
              Name={"Ari Schechter"}
              role={"Team Coach"}
              ClassYear={"2025"}
              major={"CS"}
              Email={"aschechter@wpi.edu"}
              Github={"https://github.com/aschechter10"}
              Linkdin={"https://www.linkedin.com/in/ari-schechter/"}
              Imagepath={Ari}
            />
            <AboutBlock
              Name={"Katy Stuparu"}
              role={"Team Coach"}
              ClassYear={"2025"}
              major={"CS"}
              Email={"kstuparu@wpi.edu"}
              Github={"https://github.com/kastuparu"}
              Linkdin={"https://www.linkedin.com/in/kastuparu/"}
              Imagepath={Katy}
            />
          </div>
        </Card>
        <h4 className={"text-center text-md text-muted-foreground pt-5"}>
          This application was developed by a team of students at Worcester
          Polytechnic Institute as part of the CS3733-D24 Software Engineering
          course. The team was led by Professor Wilson Wong and Team Coach Ari
          Schechter and Katy Stuparu.
        </h4>
        <h4 className={"text-center text-md text-muted-foreground pt-5"}>
          Thank you to Brigham and Women's Hospital and representative Andrew
          Shinn - Senior Planner.
        </h4>
        <h6 style={{ textAlign: "center", marginTop: "75px" }}>
          WPI Computer Science Department, CS3733-D24 Software Engineering
        </h6>
        <h6 style={{ textAlign: "center", marginTop: "20px" }}>
          ©The Brigham & Women’s Hospital maps and data used in this
          application are copyrighted and provided for the sole use of
          educational purposes.
        </h6>
        <div className={"logo-container"}>
          <img src={WPI_Logo} alt="WPI Logo" style={{ maxWidth: "125px" }} />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
