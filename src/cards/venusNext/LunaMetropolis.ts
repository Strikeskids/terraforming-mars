import {Tags} from '../Tags';
import {CardType} from '../CardType';
import {Player} from '../../Player';
import {Game} from '../../Game';
import {SpaceName} from '../../SpaceName';
import {SpaceType} from '../../SpaceType';
import {Resources} from '../../Resources';
import {CardName} from '../../CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';

export class LunaMetropolis extends Card {
  constructor() {
    super({
      name: CardName.LUNA_METROPOLIS,
      cardType: CardType.AUTOMATED,
      tags: [Tags.CITY, Tags.SPACE, Tags.EARTH],
      cost: 21,

      metadata: {
        cardNumber: '236',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().earth().played).br;
          b.city().asterix();
        }),
        description: 'Increase your MC production 1 step for each Earth tag you have, including this. Place a City tile on the RESERVED AREA',
        victoryPoints: 2,
      },
    });
  };
  public play(player: Player, game: Game) {
    player.addProduction(Resources.MEGACREDITS, player.getTagCount(Tags.EARTH) + 1);
    game.addCityTile(player, SpaceName.LUNA_METROPOLIS, SpaceType.COLONY);
    return undefined;
  }
  public getVictoryPoints() {
    return 2;
  }
}
