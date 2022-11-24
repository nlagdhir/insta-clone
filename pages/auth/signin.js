import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";

function SignIn({ providers }) {
  console.log(providers);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center space-x-7 mt-20">
        <img
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-img"
          className="rotate-6 hidden object-cover md:inline-flex md:w-48 "
        />

        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
                alt="instagram-logo"
                className="w-32 object-cover"
              />
              <p className="my-10 italic text-sm text-center">This app is created for learning purpose.</p>
              <buttons onClick={() => signIn(provider.id,{callbackUrl: '/'})} className="bg-red-400 hover:bg-red-500 text-white p-3 rounded-lg cursor-pointer">Sign in with Google</buttons>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignIn;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
};
