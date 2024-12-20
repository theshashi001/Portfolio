import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Projects = () => {
  return (
    <section className="projects-section" id='projects'>
      <article className="project-wrapper">
        <div className="project-content">
          <p className="project-overline">
            Featured Project
          </p>
          <h3 className="project-title">
            <a href="https://simpleplanets.com/" rel="noopener noreferrer" target="_blank">
              SimplePortfolio
            </a>
          </h3>
          <div className="project-description">
            <p>
              I created 99 individual layers for planets consisting of planet colors, continents, clouds, icecaps, moons and more.
              Those layers were then compiled to create 10,000 unique images. I then created a Solidity Smart Contract that allows users to mint a random NFT and splits 10% of the fee for distribution to all NFT holders and holds another 10% for giveaways at different minting tiers. This was deployed to the Binance Smart Chain. I created a DApp for minting and info about the project. That was made with NextJS and used ethers.js to interact with my deployed smart contract.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>Next.JS</li>
            <li>Javascript</li>
            <li>NEST.js</li>
            <li>NO</li>
          </ul>
          <div className="project-links">
            <a href="https://discord.gg/m9gqG6CMjM" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faDiscord} size="2x" style={{ height: '1.5em' }}/>
            </a>
            <a href="https://twitter.com/SimplePlanets" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" style={{ height: '1.5em' }}/>
            </a>
            <a href="https://bscscan.com/address/0xDd8aaa97d41256EDD51796d00182f063264a6d5b" rel="noopener noreferrer" target="_blank">
              <Image
                src="/bscscan-logo-light-circle.png"
                alt="BSCScan logo"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <div className="project-image">
          <a
            href="https://simpleplanets.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/SimplePortfolio.png"
              alt="SimplePortfolio.com Landing Section"
              width={700}
              height={438}
            />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Projects;