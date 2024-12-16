import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="p-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLinks />
        </div>
    </footer>
  )
}

export default Footer