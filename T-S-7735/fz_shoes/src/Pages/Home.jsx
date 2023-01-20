import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pro_btn from "../pro_cat_btn/Pro_btn";
import Cards from "..//Cards/Cards";
// home page
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Box textAlign="center" py={10} px={6} marginTop={"25px"}>
        <Slider {...settings}>
          <div>
            <img
              width="100%"
              height="50px"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d8a7ed99184077.5eecde766c3bd.png"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              height="50px"
              src="https://cdn.about.puma.com/-/media/images/this-is-puma/header-thisispuma_karsten.jpg?as=1&h=960&iar=1&w=1920&rev=01ce37c0ba5740a18507ad809dc382f7&hash=863F092F2133B1B5470B0992FA3536EF"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              height="50%"
              src="https://cdn.about.puma.com/-/media/images/this-is-puma/our-mission/m-06-run-puma.jpg?as=1&h=960&iar=1&w=1920&rev=83d482edadb44b39b25302a93484f758&hash=0E1C54FB3864F95BBC0BE6D545868706"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              height="50%"
              src="https://cdn.shopify.com/s/files/1/0753/2615/articles/A_GUIDE_ON_CASUAL_SHOES_FOR_MEN_Banner_1024x1024.jpg?v=1645617444"
              alt=""
            />
          </div>
          <div>
            <img
              width="100%"
              height="50%"
              src="https://sportdeals.in/pub/media/wysiwyg/2018-skechers-golf-shoes-banner-hp-main-960x450w.jpg"
              alt=""
            />
          </div>
        </Slider>
        <hr />

        <CheckCircleIcon
          boxSize={"50px"}
          color={"green.500"}
          marginTop={"30px"}
        />
        <Heading as="h1" size="xl" mt={6} mb={2}>
          Spring Into Action
        </Heading>
        <Heading as="h4" size="sm" mt={4} mb={2} margin="auto">
          As a creator, you look for ways to excel and express yourself when and
          where you can, from reaching for that last rep to evolving your
          streetwear style. Log miles or tear down the baseline in men's shoes
          with responsive cushioning.
        </Heading>
      </Box>
      <Pro_btn />

      <Cards />
    </>
  );
}
