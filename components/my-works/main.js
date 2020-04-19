import List from "./list";
import { animations, artworks, technicalArticles, projects, generalArticles, simulations } from "./contents";

export const Animations = () => (
  <List header="Animations" contents={animations} />
);

export const TechnicalArticles = () => (
    <List header="Technical Articles" contents={technicalArticles} />
);

export const Simulations = () => (
    <List header="Simulations" contents={simulations} />
);

export const GeneralArticles = () => (
    <List header="General Articles" contents={generalArticles} />
);

export const Projects = () => (
    <List header="Projects" contents={projects} />
);

export const Artworks = () => (
    <List header="Artworks" contents={artworks} />
);

  