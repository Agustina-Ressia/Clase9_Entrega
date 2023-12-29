const animeCharactersData = [
    {
        id: 1,
        name: 'Monkey D. Luffy',
        anime: 'One Piece',
        author: 'Eiichiro Oda',
        firstAppearance: 'One Piece Chapter 1',
        description: 'Protagonista de One Piece, aspira a convertirse en el Rey de los Piratas.',
        category: 'Shonen'
    }, {
        id: 2,
        name: 'Naruto Uzumaki',
        anime: 'Naruto',
        author: 'Masashi Kishimoto',
        firstAppearance: 'Naruto Chapter 1',
        description: 'Naruto es un joven ninja con el sueño de convertirse en el Hokage de su aldea.',
        category: 'Shonen'
    },
    // Agrega más personajes aquí
    {
        id: 3,
        name: 'Goku',
        anime: 'Dragon Ball',
        author: 'Akira Toriyama',
        firstAppearance: 'Dragon Ball Chapter 1',
        description: 'Goku es un guerrero Saiyan que protege la Tierra de diversas amenazas.',
        category: 'Shonen'
    }, {
        id: 4,
        name: 'Edward Elric',
        anime: 'Fullmetal Alchemist',
        author: 'Hiromu Arakawa',
        firstAppearance: 'Fullmetal Alchemist Chapter 1',
        description: 'Edward es un alquimista que busca la piedra filosofal para restaurar su cuerpo.',
        category: 'Shonen'
    }, {
        id: 5,
        name: 'Saitama',
        anime: 'One Punch Man',
        author: 'ONE',
        firstAppearance: 'One Punch Man Chapter 1',
        description: 'Saitama puede derrotar a cualquier oponente de un solo golpe, buscando emoción e' +
                'n las peleas.',
        category: 'Shonen'
    }, {
        id: 6,
        name: 'Lelouch Lamperouge',
        anime: 'Code Geass',
        author: 'Gorō Taniguchi',
        firstAppearance: 'Code Geass Episode 1',
        description: 'Lelouch posee el Geass, un poder que le otorga control sobre las personas.',
        category: 'Mecha'
    }, {
        id: 7,
        name: 'Vegeta',
        anime: 'Dragon Ball',
        author: 'Akira Toriyama',
        firstAppearance: 'Dragon Ball Chapter 204',
        description: 'Vegeta es un príncipe Saiyan que inicialmente lucha contra Goku pero luego se co' +
                'nvierte en aliado.',
        category: 'Shonen'
    }, {
        id: 8,
        name: 'Light Yagami',
        anime: 'Death Note',
        author: 'Tsugumi Ohba',
        firstAppearance: 'Death Note Episode 1',
        description: 'Light encuentra un Death Note que le permite matar a cualquier persona escribien' +
                'do su nombre.',
        category: 'Mystery'
    }, {
        id: 9,
        name: 'Nami',
        anime: 'One Piece',
        author: 'Eiichiro Oda',
        firstAppearance: 'One Piece Chapter 8',
        description: 'Nami es la navegante de la tripulación de Luffy, hábil en la cartografía y la me' +
                'teorología.',
        category: 'Shonen'
    }, {
        id: 10,
        name: 'Gon Freecss',
        anime: 'Hunter x Hunter',
        author: 'Yoshihiro Togashi',
        firstAppearance: 'Hunter x Hunter Chapter 1',
        description: 'Gon busca encontrar a su padre y se embarca en un viaje lleno de desafíos.',
        category: 'Shonen'
    }, {
        id: 11,
        name: 'Mikasa Ackerman',
        anime: 'Attack on Titan',
        author: 'Hajime Isayama',
        firstAppearance: 'Attack on Titan Chapter 1',
        description: 'Mikasa es una hábil luchadora y protectora de Eren en un mundo invadido por tita' +
                'nes.',
        category: 'Shonen'
    }, {
        id: 12,
        name: 'Spike Spiegel',
        anime: 'Cowboy Bebop',
        author: 'Shinichirō Watanabe',
        firstAppearance: 'Cowboy Bebop Episode 1',
        description: 'Spike es un cazarrecompensas espacial con un pasado misterioso.',
        category: 'Space Western'
    }, {
        id: 13,
        name: 'Ryuko Matoi',
        anime: 'Kill la Kill',
        author: 'Hiroyuki Imaishi',
        firstAppearance: 'Kill la Kill Episode 1',
        description: 'Ryuko busca venganza por la muerte de su padre, enfrentándose a poderosas enemig' +
                'as.',
        category: 'Action'
    }, {
        id: 14,
        name: 'Itachi Uchiha',
        anime: 'Naruto',
        author: 'Masashi Kishimoto',
        firstAppearance: 'Naruto Chapter 139',
        description: 'Itachi es un hábil ninja con un pasado complejo y misterioso.',
        category: 'Shonen'
    }, {
        id: 15,
        name: 'Kaneki Ken',
        anime: 'Tokyo Ghoul',
        author: 'Sui Ishida',
        firstAppearance: 'Tokyo Ghoul Chapter 1',
        description: 'Kaneki se convierte en un ghoul después de un encuentro traumático, explorando l' +
                'a dualidad entre humanos y ghouls.',
        category: 'Horror'
    }, {
        id: 16,
        name: 'Erza Scarlet',
        anime: 'Fairy Tail',
        author: 'Hiro Mashima',
        firstAppearance: 'Fairy Tail Chapter 10',
        description: 'Erza es una poderosa maga en el gremio Fairy Tail, conocida por su fuerza y dete' +
                'rminación.',
        category: 'Fantasy'
    }, {
        id: 17,
        name: 'Kakashi Hatake',
        anime: 'Naruto',
        author: 'Masashi Kishimoto',
        firstAppearance: 'Naruto Chapter 3',
        description: 'Kakashi es un hábil ninja y mentor de Naruto, conocido por su Sharingan y su est' +
                'ilo relajado.',
        category: 'Shonen'
    }, {
        id: 18,
        name: 'Hinata Hyuga',
        anime: 'Naruto',
        author: 'Masashi Kishimoto',
        firstAppearance: 'Naruto Chapter 34',
        description: 'Hinata es una ninja tímida pero valiente, conocida por su conexión con Naruto.',
        category: 'Shonen'
    }, {
        id: 19,
        name: 'Luffy',
        anime: 'My Hero Academia',
        author: 'Kōhei Horikoshi',
        firstAppearance: 'My Hero Academia Chapter 1',
        description: 'Luffy es un estudiante con el sueño de convertirse en el héroe número uno.',
        category: 'Shonen'
    }, {
        id: 20,
        name: 'Rukia Kuchiki',
        anime: 'Bleach',
        author: 'Tite Kubo',
        firstAppearance: 'Bleach Chapter 1',
        description: 'Rukia es una shinigami que otorga sus poderes a Ichigo, desencadenando eventos s' +
                'obrenaturales.',
        category: 'Supernatural'
    }, {
        id: 21,
        name: 'Sasuke Uchiha',
        anime: 'Naruto',
        author: 'Masashi Kishimoto',
        firstAppearance: 'Naruto Chapter 3',
        description: 'Sasuke es un ninja talentoso con una búsqueda de venganza y poder.',
        category: 'Shonen'
    }, {
        id: 22,
        name: 'Gon',
        anime: 'Gon',
        author: 'Masashi Tanaka',
        firstAppearance: 'Gon Chapter 1',
        description: 'Gon es un pequeño dinosaurio que vive aventuras emocionantes en la naturaleza.',
        category: 'Adventure'
    }, {
        id: 23,
        name: 'Rei Ayanami',
        anime: 'Neon Genesis Evangelion',
        author: 'Hideaki Anno',
        firstAppearance: 'Neon Genesis Evangelion Episode 1',
        description: 'Rei es una piloto de Evangelion con una personalidad enigmática y conexión con l' +
                'a trama central.',
        category: 'Mecha'
    }, {
        id: 24,
        name: 'Alphonse Elric',
        anime: 'Fullmetal Alchemist',
        author: 'Hiromu Arakawa',
        firstAppearance: 'Fullmetal Alchemist Chapter 1',
        description: 'Alphonse es el hermano de Edward, cuyo cuerpo fue sacrificado en un intento de r' +
                'esucitar a su madre.',
        category: 'Shonen'
    }, {
        id: 25,
        name: 'Guts',
        anime: 'Berserk',
        author: 'Kentaro Miura',
        firstAppearance: 'Berserk Chapter 1',
        description: 'Guts es un guerrero mercenario marcado por la Marca del Sacrificio, inmerso en u' +
                'na oscura fantasía.',
        category: 'Dark Fantasy'
    }
];

export default animeCharactersData;
