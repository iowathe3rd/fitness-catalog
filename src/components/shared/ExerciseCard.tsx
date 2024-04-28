import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Exercise } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ExerciseCardProps = {
  exercise: Exercise;
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <Card className="flex flex-col md:flex-col max-w-md">
      <Image
        src={exercise.gifUrl}
        alt={exercise.name}
        width={400}
        height={400}
        className="h-80"
      />
      <div>
        <CardHeader>
          <CardTitle>{exercise.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4">
            <li>
              Body part -{" "}
              <span className="font-bold italic">{exercise.bodyPart}</span>
            </li>
            <li>
              Equpimenr -{" "}
              <span className="font-bold italic">{exercise.equipment}</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={`/exercises/${exercise.id}`}>See exercise</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ExerciseCard;
