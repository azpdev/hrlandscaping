const START_HOUR = 7;
const END_HOUR = 17;
const currentDate = new Date(
  new Date().toLocaleString("en-US", { timeZone: "America/Denver" })
);

function getOpening(date) {
  // Check Sunday
  let day = date.getDay();
  if (day === 0) {
    return "Opens tomorrow at 7 AM MST";
  }

  // Check Hour
  let hour = date.getHours();

  if (hour < START_HOUR) {
    return "Opening at 7 AM MST";
  }
  if (hour >= END_HOUR) {
    if (day === 6) {
      return "Opens on Monday at 7 AM MST";
    }
    return "Opens tomorrow at 7 AM MST";
  }
  return "Open until 5 PM MST";
}

const PLACE_API_KEY = "AIzaSyBeTFow2PnWD0qixThsWN-4Y9a957dateU";
const PLACE_ID = "ChIJ80-T2x2JUocR6ZKnchUDsLw";
const GOOGLE_PLACE_API = "https://places.googleapis.com/v1/places";

async function getReviews() {
  try {
    const res = await fetch(
      `${GOOGLE_PLACE_API}/${PLACE_ID}?key=${PLACE_API_KEY}&fields=reviews`,
      {
        method: "GET",
      }
    );
    return JSON.parse(res.body).reviews;
  } catch (e) {
    return [
      {
        name: "places/ChIJ80-T2x2JUocR6ZKnchUDsLw/reviews/ChdDSUhNMG9nS0VJQ0FnSUREdWVpUW53RRAB",
        relativePublishTimeDescription: "5 months ago",
        rating: 4,
        text: {
          text: "HR landscaping did the aeration on my lawn and I was so pleased with the thorough job that was done. I have not been happy with the service I received these past few yrs. My first time with Eric, great quality of work. Excellent communication. The price point was quite a bit higher. Old saying you get what you pay for? Maybe\nThanks Eric!",
          languageCode: "en",
        },
        originalText: {
          text: "HR landscaping did the aeration on my lawn and I was so pleased with the thorough job that was done. I have not been happy with the service I received these past few yrs. My first time with Eric, great quality of work. Excellent communication. The price point was quite a bit higher. Old saying you get what you pay for? Maybe\nThanks Eric!",
          languageCode: "en",
        },
        authorAttribution: {
          displayName: "Glennys Ware",
          uri: "https://www.google.com/maps/contrib/102577663246442114234/reviews",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjVN1_wyCmOa5Z_aPyKbPvJygeNdyafU9ZJoAIZcgMVYaLXvGcQ=s128-c0x00000000-cc-rp-mo",
        },
        publishTime: "2024-04-11T16:10:00Z",
      },
      {
        name: "places/ChIJ80-T2x2JUocR6ZKnchUDsLw/reviews/ChZDSUhNMG9nS0VJQ0FnSURHck92dE9BEAE",
        relativePublishTimeDescription: "2 years ago",
        rating: 5,
        text: {
          text: "I am the owner of Green IQ Lawn Care in Salt Lake City. We specialize in Turf Agronomics. We have a good client base here within the valley and the surrounding counties. Well we like to pride ourselves in high quality work and service. We don't offer landscaping services such as mowing, edging, yard cleanup , and mulching. We needed someone to fulfill our clients needs and we don't just refer anyone. We only bring on contractors that have an impeccable reputation, has great communication skills, and of course, their work speaks for itself. We are so happy that we found Erick, who owns HR Landscaping Services. He and his company is batting 1000! Me as the owner of my company, I love making connections within my industry. I can now call Erick a close friend and colleague of mine. We will continue to use this company for the services listed above. If any of you are reading this, whether a home owner or business owner, this guy and company is a rare find. 100% recommend! Erick, cheers to another season down and a new one to come. I appreciate everything you do. Keep making a difference! -Breyden / Owner of Green IQ Lawn Care",
          languageCode: "en",
        },
        originalText: {
          text: "I am the owner of Green IQ Lawn Care in Salt Lake City. We specialize in Turf Agronomics. We have a good client base here within the valley and the surrounding counties. Well we like to pride ourselves in high quality work and service. We don't offer landscaping services such as mowing, edging, yard cleanup , and mulching. We needed someone to fulfill our clients needs and we don't just refer anyone. We only bring on contractors that have an impeccable reputation, has great communication skills, and of course, their work speaks for itself. We are so happy that we found Erick, who owns HR Landscaping Services. He and his company is batting 1000! Me as the owner of my company, I love making connections within my industry. I can now call Erick a close friend and colleague of mine. We will continue to use this company for the services listed above. If any of you are reading this, whether a home owner or business owner, this guy and company is a rare find. 100% recommend! Erick, cheers to another season down and a new one to come. I appreciate everything you do. Keep making a difference! -Breyden / Owner of Green IQ Lawn Care",
          languageCode: "en",
        },
        authorAttribution: {
          displayName: "Breyden Gillett",
          uri: "https://www.google.com/maps/contrib/117324859260464027036/reviews",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjWYv8187-HKWA9lFfpBb37ygW6hFj_Mn8U3Ari4L6-60AuUOrQ=s128-c0x00000000-cc-rp-mo",
        },
        publishTime: "2021-11-20T19:07:44Z",
      },
      {
        name: "places/ChIJ80-T2x2JUocR6ZKnchUDsLw/reviews/ChZDSUhNMG9nS0VJQ0FnSUNpaFlLaVhBEAE",
        relativePublishTimeDescription: "3 years ago",
        rating: 5,
        text: {
          text: "Eric has been mowing my lawn all summer. He's fast, does a great job and is affordable. He communicates in a timely manner if I have questions or there needs to be a schedule change. Will continue to use this company.",
          languageCode: "en",
        },
        originalText: {
          text: "Eric has been mowing my lawn all summer. He's fast, does a great job and is affordable. He communicates in a timely manner if I have questions or there needs to be a schedule change. Will continue to use this company.",
          languageCode: "en",
        },
        authorAttribution: {
          displayName: "Tjsgirlonweightwatchers",
          uri: "https://www.google.com/maps/contrib/109180362608376242362/reviews",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjX8vfaa8yCXzgifum7549qx8Y2dZzDWF_Nq94_oGLUBZkNnyxY=s128-c0x00000000-cc-rp-mo",
        },
        publishTime: "2020-11-08T16:46:25Z",
      },
      {
        name: "places/ChIJ80-T2x2JUocR6ZKnchUDsLw/reviews/ChdDSUhNMG9nS0VJQ0FnSUQyNGJMUS1RRRAB",
        relativePublishTimeDescription: "2 years ago",
        rating: 1,
        text: {
          text: 'I reached out to Erick at HR Landscaping in early April about a spring cleanup for my yard and weekly mowing.  Initially, he was quick to respond and came over to look at my yard the day after I contacted him to give me an estimate.  He started the weekly mowing, but kept delaying my spring cleanup and even "double booked" himself once.  Mistakes happen, but he continued to jerk me around by telling me the cleanup could be done the following weekend.  By the time the weekend rolled around, Erick could not do the cleanup because "the rain pushed everything back".  Ok, I get it, weather is unpredictable.  So we agreed upon the following Monday.  Well, Monday came and went and Erick was a no show.  I reached out to him several times to find out what was going on and if he had me in the schedule.  No response.  He completely went silent on me.  This is incredibly frustrating as I contacted Erick over a month ago about a spring cleanup and was relying on this service to host a gathering in my back yard this week.  But now I am stuck with a yard full of weeds.  I am baffled by the positive reviews here. In my experience, Erick was completely unprofessional and misleading.  Avoid this company!',
          languageCode: "en",
        },
        originalText: {
          text: 'I reached out to Erick at HR Landscaping in early April about a spring cleanup for my yard and weekly mowing.  Initially, he was quick to respond and came over to look at my yard the day after I contacted him to give me an estimate.  He started the weekly mowing, but kept delaying my spring cleanup and even "double booked" himself once.  Mistakes happen, but he continued to jerk me around by telling me the cleanup could be done the following weekend.  By the time the weekend rolled around, Erick could not do the cleanup because "the rain pushed everything back".  Ok, I get it, weather is unpredictable.  So we agreed upon the following Monday.  Well, Monday came and went and Erick was a no show.  I reached out to him several times to find out what was going on and if he had me in the schedule.  No response.  He completely went silent on me.  This is incredibly frustrating as I contacted Erick over a month ago about a spring cleanup and was relying on this service to host a gathering in my back yard this week.  But now I am stuck with a yard full of weeds.  I am baffled by the positive reviews here. In my experience, Erick was completely unprofessional and misleading.  Avoid this company!',
          languageCode: "en",
        },
        authorAttribution: {
          displayName: "Danielle Brisky",
          uri: "https://www.google.com/maps/contrib/104480750526769331211/reviews",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjV-BaTiu8rAafQeEoLJpQJQRBQlyuSKNHGV5Keoy7OF8nLXH2AH=s128-c0x00000000-cc-rp-mo",
        },
        publishTime: "2022-05-17T11:08:10Z",
      },
      {
        name: "places/ChIJ80-T2x2JUocR6ZKnchUDsLw/reviews/ChZDSUhNMG9nS0VJQ0FnSUNpM3BIY1J3EAE",
        relativePublishTimeDescription: "3 years ago",
        rating: 5,
        text: {
          text: "Erick has taken care of our yard for two summers now.  He is always on time, meticulous about his work, and leaves the yard immaculate.  His prices are reasonable.  I would highly recommend him.",
          languageCode: "en",
        },
        originalText: {
          text: "Erick has taken care of our yard for two summers now.  He is always on time, meticulous about his work, and leaves the yard immaculate.  His prices are reasonable.  I would highly recommend him.",
          languageCode: "en",
        },
        authorAttribution: {
          displayName: "jane erwin",
          uri: "https://www.google.com/maps/contrib/100503130910110067928/reviews",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocLSyGPGYlcqHbM9IoLKVbPknIQ5epwxSIgCNaLOpm9GElkBDQ=s128-c0x00000000-cc-rp-mo",
        },
        publishTime: "2020-11-03T23:41:02Z",
      },
    ];
  }
}

function makeReviewElement(review) {
  let reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  let authorElement = document.createElement("a");
  authorElement.href = review.authorAttribution.uri;

  let authorProfileImageElement = document.createElement("img");
  authorProfileImageElement.src = review.authorAttribution.photoUri;
  authorProfileImageElement.alt = "user profile image.";

  authorElement.appendChild(authorProfileImageElement);

  let nameElement = document.createElement("h3");
  nameElement.innerText = review.authorAttribution.displayName;

  authorElement.appendChild(nameElement);

  reviewElement.appendChild(authorElement);

  let starsElement = document.createElement("div");
  starsElement.classList.add("review-stars");

  for (let i = 0; i < review.rating; i++) {
    let starElement = document.createElement("img");
    starElement.src = "/assets/icons/star.svg";
    starsElement.appendChild(starElement);
  }

  reviewElement.appendChild(starsElement);

  let reviewTextContainerElement = document.createElement("div");
  reviewTextContainerElement.classList.add("review-text");

  let reviewTextElement = document.createElement("p");
  reviewTextElement.innerText = review.text.text;

  reviewTextContainerElement.appendChild(reviewTextElement);
  reviewElement.appendChild(reviewTextContainerElement);

  return reviewElement;
}

window.addEventListener("load", async () => {
  // Business Hours
  document.getElementById("business-hours").innerHTML = getOpening(currentDate);
  setTimeout(() => {
    document.getElementById("business-hours").classList.add("animate-hours");
  }, 100);

  // Reviews
  let reviews = await getReviews();
  setTimeout(() => {
    document.getElementById("loader-container").classList.add("hide");
    let reviewsElement = document.getElementById("reviews");
    if (reviews.length === 0) {
      let noReviewsElement = document.createElement("h3");
      noReviewsElement.innerText = "No reviews available at this time.";
      reviewsElement.appendChild(noReviewsElement);
    } else {
      for (const review of reviews) {
        reviewsElement.appendChild(makeReviewElement(review));
      }
    }
  }, 100);
});
