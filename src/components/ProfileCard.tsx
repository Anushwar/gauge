import Card from './Card';
import Heading from './Heading';

interface ProfileCardProps {
  companyName: string;
  cin: string;
  profilePicUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  companyName,
  cin,
  profilePicUrl,
}) => {
  const placeholderImageUrl = 'https://placehold.co/400';

  return (
    <Card
      bgColor="white"
      css={{
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <img
        src={profilePicUrl || placeholderImageUrl}
        width={75}
        height={75}
        alt="Profile"
      />
      <div>
        <Heading>{companyName}</Heading>
        <p>CIN: {cin}</p>
        <p>abc@xyz.com</p>
      </div>
    </Card>
  );
};

export default ProfileCard;
