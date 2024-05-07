import './App.css'
import BlogSection from './components/BlogSection.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'

function App() {

  const gymBlogList = [
    {
        "title" : "Gym in Life",
        "subject" : "Fitness",
        "blog" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem perferendis, iusto dolor id maxime debitis, quidem quasi est tenetur inventore pariatur asperiores laudantium doloremque. Amet minima quia error itaque? Cupiditate quas repudiandae nulla quam!"
    },
    {
        "title" : "Importance of Gym",
        "subject" : "Gym in Life",
        "blog" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem perferendis, iusto dolor id maxime debitis, quidem quasi est tenetur inventore pariatur asperiores laudantium doloremque. Amet minima quia error itaque? Cupiditate quas repudiandae nulla quam!"
    },
    {
      "title" : "Life of Athlete",
      "subject" : "Athlitics in day to day life",
      "blog" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem perferendis, iusto dolor id maxime debitis, quidem quasi est tenetur inventore pariatur asperiores laudantium doloremque. Amet minima quia error itaque? Cupiditate quas repudiandae nulla quam!"
  },
  {
      "title" : "Gymnastic",
      "subject" : "Gymnastic a healthy way to live life",
      "blog" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem perferendis, iusto dolor id maxime debitis, quidem quasi est tenetur inventore pariatur asperiores laudantium doloremque. Amet minima quia error itaque? Cupiditate quas repudiandae nulla quam!"
  },
]

  return (
    <>
      <Header />
      <HeroSection />
      <BlogSection gymBlogList={gymBlogList} />
      <Contact />
    </>
  )
}

export default App
