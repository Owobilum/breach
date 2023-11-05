import { useState, type ReactElement, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BackButton } from "../../../../components/back-button";
import { IconButton } from "../../../../components/icon-button";
import { Button } from "../../../../components/button";
import { useBlogCategories } from "../../../../hooks/useBlogCategories";
import { useUserInterests } from "../../../../hooks/useUserInterests";
import { Spinner } from "../../../../components/spinner";

const checkIsSelected = (interestId: number, selectedInterests: number[]) => {
  return (
    selectedInterests.findIndex(
      (selectedInterest) => selectedInterest === interestId,
    ) !== -1
  );
};

function RegisterInterestsPage(): ReactElement {
  const navigate = useNavigate();
  const categories = useBlogCategories();
  const { userInterestsMutation } = useUserInterests();
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);

  const cannotClickNext =
    userInterestsMutation.isPending || !selectedInterests.length;

  const toggleIsSelected = (interestId: number) => {
    if (checkIsSelected(interestId, selectedInterests)) {
      const updatedInterests = selectedInterests.filter(
        (selectedInterest) => selectedInterest !== interestId,
      );
      setSelectedInterests(updatedInterests);
    } else {
      const updatedInterests = [...selectedInterests, interestId];
      setSelectedInterests(updatedInterests);
    }
  };

  const handleNext = () => {
    userInterestsMutation.mutate({ interests: selectedInterests });
  };

  useEffect(() => {
    if (!userInterestsMutation.isSuccess) return;
    navigate("/user/home");
  }, [navigate, userInterestsMutation.isSuccess]);

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
            {categories?.map(({ icon, name, id }) => (
              <IconButton
                key={id}
                icon={icon}
                className="mb-5 mr-5"
                size="sm"
                text="sm"
                variant={
                  checkIsSelected(id, selectedInterests) ? "default" : "outline"
                }
                onClick={toggleIsSelected.bind(null, id)}
              >
                {name}
              </IconButton>
            ))}
          </div>
          <Button
            variant="black"
            onClick={handleNext}
            disabled={cannotClickNext}
          >
            {userInterestsMutation.isPending ? <Spinner /> : "Next"}
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
