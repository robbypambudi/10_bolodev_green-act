import NextImage from "@/components/NextImage";
import Typography from "@/components/typography/Typography";

type AvatarCardProps = {
  name: string;
  imageUrl: string;
  particapateDate: string;
};

export default function AvatarCard({
  name,
  imageUrl,
  particapateDate,
}: AvatarCardProps) {
  return (
    <div className="flex items-center">
      <NextImage src={imageUrl} alt={name} className="w-16 h-16 rounded-full" width={60} height={60} />
      <div>
        <Typography as="h4" variant="h4" className="ml-2">
          {name}
        </Typography>
        <Typography as="p" className="ml-2">
          Bergabung pada {particapateDate}
        </Typography>
      </div>
    </div>
  )
}