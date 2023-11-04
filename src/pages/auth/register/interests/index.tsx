import { useState, type ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BackButton } from "../../../../components/back-button";
import { IconButton } from "../../../../components/icon-button";
import { Button } from "../../../../components/button";

const interests = [
  {
    id: 1,
    name: "Humor",
    icon: "🤣",
  },
  {
    id: 2,
    name: "Lifehacks",
    icon: "💡",
  },
  {
    id: 3,
    name: "Crypto",
    icon: "🪙",
  },
  {
    id: 4,
    name: "Art",
    icon: "🖊️",
  },
  {
    id: 5,
    name: "Travel",
    icon: "✈️",
  },
  {
    id: 6,
    name: "Sports",
    icon: "🏀",
  },
  {
    id: 7,
    name: "Photography",
    icon: "📸",
  },
  {
    id: 8,
    name: "Food & drink",
    icon: "🍔",
  },
  {
    id: 9,
    name: "History",
    icon: "🏛️",
  },
  {
    id: 10,
    name: "Science",
    icon: "🧬",
  },
  {
    id: 11,
    name: "News",
    icon: "📰",
  },
  {
    id: 12,
    name: "Business & Finance",
    icon: "📈",
  },
  {
    id: 13,
    name: "Music",
    icon: "🎵",
  },
  {
    id: 14,
    name: "Tech",
    icon: "📱",
  },
  {
    id: 15,
    name: "Faith & Spirituality",
    icon: "🙏🏽",
  },
  {
    id: 16,
    name: "Fashion & Beauty",
    icon: "💄",
  },
  {
    id: 17,
    name: "Nature",
    icon: "🌱",
  },
  {
    id: 18,
    name: "General",
    icon: "🌐",
  },
  {
    id: 19,
    name: "Health & Fitness",
    icon: "🏋🏽‍♀️",
  },
  {
    id: 20,
    name: "Entertainment",
    icon: "🎥",
  },
  {
    id: 21,
    name: "Gaming & Defi",
    icon: "🎮",
  },
  {
    id: 22,
    name: "Education",
    icon: "📚",
  },
  {
    id: 23,
    name: "Politics & Activism",
    icon: "🪧",
  },
  {
    id: 24,
    name: "Art & Illustration",
    icon: "🎨",
  },
  {
    id: 25,
    name: "World Economics",
    icon: "💰",
  },
  {
    id: 26,
    name: "Demystifying the crypto-world",
    icon: "🌍",
  },
];

const checkIsSelected = (interest: string, selectedInterests: string[]) => {
  return (
    selectedInterests.findIndex(
      (selectedInterest) => selectedInterest === interest,
    ) !== -1
  );
};

function RegisterInterestsPage(): ReactElement {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleIsSelected = (interest: string) => {
    if (checkIsSelected(interest, selectedInterests)) {
      const updatedInterests = selectedInterests.filter(
        (selectedInterest) => selectedInterest !== interest,
      );
      setSelectedInterests(updatedInterests);
    } else {
      const updatedInterests = [...selectedInterests, interest];
      setSelectedInterests(updatedInterests);
    }
  };

  return (
    <>
      <p className="lg:pl-20">
        <BackButton className="mb-2 mt-[1.5625rem]" />
      </p>
      <div className="mx-auto max-w-[45.75rem] pb-10">
        <div className="text-center">
          <img
            src="/images/bev_rounded.svg"
            alt="breach_mascot"
            className="mx-auto"
          />
          <h1 className="font-inter text-grey-900 my-2 text-2xl font-semibold leading-10">
            What are your interests?
          </h1>
          <p className="font-inter text-base">
            Select your interests and I'll recommend some series I'm certain
            you'll enjoy!
          </p>
          <div className="mb-12 mt-10">
            {interests.map(({ icon, name, id }) => (
              <IconButton
                key={id}
                icon={icon}
                className="mb-5 mr-5"
                size="sm"
                text="sm"
                variant={
                  checkIsSelected(name, selectedInterests)
                    ? "default"
                    : "outline"
                }
                onClick={toggleIsSelected.bind(null, name)}
              >
                {name}
              </IconButton>
            ))}
          </div>
          <Button variant="black" onClick={() => navigate("/user/home")}>
            Next
          </Button>

          <Link
            to="/user/home"
            className="font-inter text-grey-700 mt-[1.125rem] block text-sm hover:text-primary-600"
          >
            Skip for later
          </Link>
        </div>
      </div>
    </>
  );
}

export default RegisterInterestsPage;
