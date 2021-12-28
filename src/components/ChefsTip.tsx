import IChefsTip from '../interfaces/IChefsTip';

interface IChefsTipProps {
  chefsTip?: IChefsTip;
}

const ChefsTip = ({ chefsTip }: IChefsTipProps) => {
  return chefsTip ? (
    <aside>
      <strong>{`Chef's Tip: ${chefsTip.name}`}</strong>
      <ol>
        {chefsTip.list.map((item) => (
          <>
            <li key={item.id}>{item.description}</li>
          </>
        ))}
      </ol>
    </aside>
  ) : null;
};

export default ChefsTip;
