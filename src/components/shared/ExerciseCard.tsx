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
    <Card className="flex flex-col md:flex-col">
      <Image
        src={exercise.gifUrl}
        alt={exercise.name}
        width={400}
        height={400}
      />
      <div>
        <CardHeader>
          <CardTitle>${exercise.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
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
