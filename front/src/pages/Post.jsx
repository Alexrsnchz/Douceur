import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';

import postImage from '../assets/images/post/sample_post.jpg';

function Post() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="relative bg-white rounded-lg shadow-lg mx-4 my-8 md:mx-8 lg:mx-16 xl:mx-24 p-4 md:p-8 lg:p-12">
          <div
            className="w-full bg-cover bg-center h-64 md:h-96 rounded-md"
            style={{ backgroundImage: `url(${postImage})` }}
          >
            <img
              src={postImage}
              alt="Post"
              className="w-full h-full object-cover opacity-0 rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center p-4 md:p-8 lg:p-12">
            <div className="flex justify-between text-xs text-gray-600 mb-2">
              <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Fecha de Creación: 01/01/2024
              </span>
              <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
                Última Modificación: 02/02/2024
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Título del Post
            </h1>

            <p className="text-gray-700 mb-6">
              Phasellus ultricies lorem non efficitur pulvinar. Quisque urna
              velit, fringilla sed aliquam ut, dignissim a eros. Vivamus
              dignissim, tellus vitae bibendum ultrices, magna dui blandit leo,
              in mattis ligula diam quis erat. In quis mi ac erat elementum
              sagittis. In eros quam, feugiat faucibus velit et, cursus
              vulputate nibh. Maecenas mattis enim eu placerat pellentesque.
              Proin fringilla diam ipsum, vel ullamcorper risus accumsan eu.
              Aenean id lacus sit amet justo elementum rutrum id eu justo.
              Suspendisse ac viverra ante, ut ornare ipsum. Curabitur et
              tincidunt ex. Ut sagittis lacinia libero. Ut egestas odio eget
              justo aliquam, id auctor nisi convallis. In vel nulla in nunc
              venenatis interdum. Nunc eget urna erat. In hac habitasse platea
              dictumst. Etiam sodales odio ut nulla lacinia, non vestibulum
              tellus porta. Duis lectus erat, finibus sed risus a, egestas
              molestie ipsum. Donec id libero venenatis, euismod augue non,
              feugiat lorem. Integer non pharetra elit, sed hendrerit leo.
              Integer non ex posuere, sagittis turpis ac, hendrerit sapien.
              Mauris quam lectus, eleifend a tempus eu, viverra id metus.
              Vivamus eros nulla, ultricies ut sagittis at, congue in purus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus tempor lectus vitae neque
              imperdiet, accumsan vestibulum tellus pharetra. Integer nec purus
              in diam tempus semper efficitur ut elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce suscipit turpis id neque facilisis feugiat non vel massa.
              Cras quis porttitor ipsum. Curabitur interdum massa vel dapibus
              aliquam. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Aliquam ac vulputate dolor,
              at aliquet leo. Integer porta nisl eu ante feugiat, vel eleifend
              enim eleifend. Curabitur vel lectus non arcu eleifend laoreet eget
              vitae dolor. Ut nec tortor aliquet, consectetur odio id, volutpat
              dui. Suspendisse ante dolor, mollis eget augue in, aliquam
              pellentesque diam. Curabitur dignissim lorem eu est malesuada
              mollis. Nullam molestie leo ac eros sagittis posuere. Morbi
              ultrices porttitor ipsum id porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec non leo est. Cras lobortis eros
              vitae nibh sagittis, et dignissim nibh luctus. Nam nec justo
              consequat, rhoncus felis id, vestibulum sem. In commodo tristique
              orci, non faucibus orci condimentum in. Integer fringilla lectus
              eu malesuada auctor. Donec a lacus id enim cursus accumsan ac
              ultricies risus. Duis non risus at nisi gravida aliquam. In enim
              felis, imperdiet in maximus id, laoreet et massa. Aenean
              vestibulum libero mauris, id posuere dui gravida quis. Nam euismod
              sit amet nisl ac luctus. Pellentesque a feugiat erat, vitae
              volutpat sem. Vivamus non nisl egestas, dignissim dolor et,
              tristique purus. Ut id urna aliquet felis fringilla dapibus quis
              quis neque. Morbi dignissim varius nunc non cursus. Quisque
              vestibulum vel arcu feugiat fringilla. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Phasellus et ante dignissim, convallis eros ultrices, feugiat
              ante. Donec finibus lobortis tellus, quis iaculis risus eleifend
              nec. Sed blandit aliquet erat. Vivamus vel velit rutrum, bibendum
              eros in, sagittis erat. Cras ac scelerisque justo, eleifend
              convallis erat. Nullam vel lacinia velit. Sed laoreet, dolor id
              tristique blandit, leo dui condimentum lorem, sit amet convallis
              nulla risus vel justo. Maecenas nec metus sit amet leo egestas
              congue. Sed lobortis rhoncus venenatis. Duis eget felis
              scelerisque, viverra lectus at, finibus nulla. Aenean eget
              porttitor sapien. Fusce sit amet turpis vulputate neque molestie
              ullamcorper at ut metus. Mauris mi nulla, suscipit sit amet purus
              eu, tincidunt eleifend est. Vivamus id risus eget libero iaculis
              elementum. Suspendisse nec ultrices lorem. Curabitur mollis
              aliquet turpis, eu lacinia mauris semper vitae. Praesent dignissim
              feugiat diam, non sodales felis scelerisque in. Vivamus
              pellentesque et lacus quis egestas. Suspendisse eleifend augue
              lacus, in ultrices urna lobortis posuere. Cras rhoncus arcu id
              placerat vestibulum. Quisque euismod accumsan elit at hendrerit.
              Nunc blandit eget tellus id rutrum. In enim neque, volutpat a
              tortor at, laoreet mollis dolor. Pellentesque dapibus ut urna non
              egestas. Pellentesque fermentum diam non consectetur dignissim.
              Suspendisse elit eros, facilisis non sem ac, bibendum fermentum
              mi. Vivamus lobortis quis urna ut faucibus. Nulla tempor egestas
              urna eu sollicitudin. Pellentesque congue rutrum ex et
              condimentum. In dolor augue, lobortis nec mattis a, laoreet
              imperdiet elit. Mauris vitae felis pretium, consequat elit quis,
              dapibus dolor. Nulla facilisi. Vestibulum tincidunt massa semper
              ex eleifend sollicitudin. Etiam auctor fermentum nibh, id
              tristique quam placerat vitae. Proin iaculis placerat sodales.
              Nunc a eros id elit auctor porttitor in sed risus. Maecenas sed
              neque sed sapien sodales pellentesque nec et justo. Nunc eget
              dolor vestibulum, consequat orci at, volutpat diam. Fusce tempus
              sem a urna malesuada vulputate. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Etiam ac ex tortor. Duis varius elementum risus, vitae euismod
              metus. Integer sed tristique metus. Ut tincidunt facilisis est sed
              posuere. Sed pretium ante elementum risus auctor, sed pulvinar
              turpis rhoncus. Curabitur id eros tincidunt, cursus nunc quis,
              molestie tellus. Donec vehicula accumsan purus, non scelerisque
              tellus pellentesque nec. Praesent convallis non ipsum sit amet
              maximus. Cras urna lorem, tincidunt non dolor eget, dignissim
              pretium mi. Nam imperdiet, libero in faucibus bibendum, mauris
              magna blandit metus, nec mollis lectus dolor id leo. In a eros
              risus. Etiam nec mattis orci, at auctor purus. Maecenas vehicula
              magna a augue dictum, sed interdum lacus pulvinar. Ut nec placerat
              sem. Suspendisse potenti. Aenean elementum libero vitae enim
              tincidunt, vitae dignissim erat malesuada. Donec ac dapibus velit.
              Nullam blandit auctor purus sed hendrerit. Mauris bibendum dapibus
              erat, suscipit fermentum ligula efficitur in. Praesent pulvinar
              lobortis sagittis. Donec volutpat quam ut ante imperdiet ultrices.
              Aenean eu quam vel arcu commodo mollis. Vivamus non pellentesque
              urna. Nunc in efficitur lacus. Maecenas efficitur vitae massa
              vitae tempor. Nam id consectetur nulla, et volutpat elit. Aliquam
              ipsum lectus, pretium sed feugiat non, hendrerit quis erat. Sed
              diam nisl, dictum et lorem id, dignissim pretium urna. Donec
              tempor elit mi. Fusce tincidunt finibus eros, viverra fringilla
              libero tincidunt ut. Donec euismod enim at ligula egestas iaculis.
              Aenean ultricies feugiat rutrum. Sed mattis euismod luctus. Duis
              porta pharetra diam sed aliquam. Nulla facilisi. Nulla sapien
              nibh, ullamcorper venenatis volutpat sed, dapibus et risus. Sed
              blandit, mi in tempor consectetur, est nunc sollicitudin neque, eu
              faucibus massa sapien ut ligula. Nam ex arcu, ultrices id dapibus
              sed, suscipit et mi. Cras nisi nulla, fringilla eget orci eget,
              pretium vulputate mauris. Morbi et elementum eros. Vestibulum
              imperdiet magna ac quam placerat finibus. Sed varius vitae nisi
              nec semper. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum mattis tellus sit amet volutpat tempor. Aenean
              sed porttitor libero, varius vestibulum metus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Pellentesque ultrices fringilla neque vitae facilisis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Etiam consequat metus arcu, ac
              dictum felis gravida non. Duis nunc ipsum, sodales sed metus eget,
              accumsan vulputate velit. Vivamus malesuada dolor risus, quis
              egestas felis rhoncus ut. Nullam vel metus suscipit dui venenatis
              tincidunt nec vel neque. Maecenas finibus diam vel orci efficitur,
              a rutrum nisi accumsan. Phasellus faucibus urna odio, quis
              scelerisque arcu consectetur sed. Aliquam ultrices nulla et orci
              vulputate dictum. Phasellus ultricies lorem non efficitur
              pulvinar. Quisque urna velit, fringilla sed aliquam ut, dignissim
              a eros. Vivamus dignissim, tellus vitae bibendum ultrices, magna
              dui blandit leo, in mattis ligula diam quis erat. In quis mi ac
              erat elementum sagittis. In eros quam, feugiat faucibus velit et,
              cursus vulputate nibh. Maecenas mattis enim eu placerat
              pellentesque. Proin fringilla diam ipsum, vel ullamcorper risus
              accumsan eu. Aenean id lacus sit amet justo elementum rutrum id eu
              justo. Suspendisse ac viverra ante, ut ornare ipsum. Curabitur et
              tincidunt ex. Ut sagittis lacinia libero. Ut egestas odio eget
              justo aliquam, id auctor nisi convallis. In vel nulla in nunc
              venenatis interdum. Nunc eget urna erat. In hac habitasse platea
              dictumst. Etiam sodales odio ut nulla lacinia, non vestibulum
              tellus porta. Duis lectus erat, finibus sed risus a, egestas
              molestie ipsum. Donec id libero venenatis, euismod augue non,
              feugiat lorem. Integer non pharetra elit, sed hendrerit leo.
              Integer non ex posuere, sagittis turpis ac, hendrerit sapien.
              Mauris quam lectus, eleifend a tempus eu, viverra id metus.
              Vivamus eros nulla, ultricies ut sagittis at, congue in purus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus tempor lectus vitae neque
              imperdiet, accumsan vestibulum tellus pharetra. Integer nec purus
              in diam tempus semper efficitur ut elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce suscipit turpis id neque facilisis feugiat non vel massa.
              Cras quis porttitor ipsum. Curabitur interdum massa vel dapibus
              aliquam. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Aliquam ac vulputate dolor,
              at aliquet leo. Integer porta nisl eu ante feugiat, vel eleifend
              enim eleifend. Curabitur vel lectus non arcu eleifend laoreet eget
              vitae dolor. Ut nec tortor aliquet, consectetur odio id, volutpat
              dui. Suspendisse ante dolor, mollis eget augue in, aliquam
              pellentesque diam. Curabitur dignissim lorem eu est malesuada
              mollis. Nullam molestie leo ac eros sagittis posuere. Morbi
              ultrices porttitor ipsum id porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec non leo est. Cras lobortis eros
              vitae nibh sagittis, et dignissim nibh luctus. Nam nec justo
              consequat, rhoncus felis id, vestibulum sem. In commodo tristique
              orci, non faucibus orci condimentum in. Integer fringilla lectus
              eu malesuada auctor. Donec a lacus id enim cursus accumsan ac
              ultricies risus. Duis non risus at nisi gravida aliquam. In enim
              felis, imperdiet in maximus id, laoreet et massa. Aenean
              vestibulum libero mauris, id posuere dui gravida quis. Nam euismod
              sit amet nisl ac luctus. Pellentesque a feugiat erat, vitae
              volutpat sem. Vivamus non nisl egestas, dignissim dolor et,
              tristique purus. Ut id urna aliquet felis fringilla dapibus quis
              quis neque. Morbi dignissim varius nunc non cursus. Quisque
              vestibulum vel arcu feugiat fringilla. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Phasellus et ante dignissim, convallis eros ultrices, feugiat
              ante. Donec finibus lobortis tellus, quis iaculis risus eleifend
              nec. Sed blandit aliquet erat. Vivamus vel velit rutrum, bibendum
              eros in, sagittis erat. Cras ac scelerisque justo, eleifend
              convallis erat. Phasellus ultricies lorem non efficitur pulvinar.
              Quisque urna velit, fringilla sed aliquam ut, dignissim a eros.
              Vivamus dignissim, tellus vitae bibendum ultrices, magna dui
              blandit leo, in mattis ligula diam quis erat. In quis mi ac erat
              elementum sagittis. In eros quam, feugiat faucibus velit et,
              cursus vulputate nibh. Maecenas mattis enim eu placerat
              pellentesque. Proin fringilla diam ipsum, vel ullamcorper risus
              accumsan eu. Aenean id lacus sit amet justo elementum rutrum id eu
              justo. Suspendisse ac viverra ante, ut ornare ipsum. Curabitur et
              tincidunt ex. Ut sagittis lacinia libero. Ut egestas odio eget
              justo aliquam, id auctor nisi convallis. In vel nulla in nunc
              venenatis interdum. Nunc eget urna erat. In hac habitasse platea
              dictumst. Etiam sodales odio ut nulla lacinia, non vestibulum
              tellus porta. Duis lectus erat, finibus sed risus a, egestas
              molestie ipsum. Donec id libero venenatis, euismod augue non,
              feugiat lorem. Integer non pharetra elit, sed hendrerit leo.
              Integer non ex posuere, sagittis turpis ac, hendrerit sapien.
              Mauris quam lectus, eleifend a tempus eu, viverra id metus.
              Vivamus eros nulla, ultricies ut sagittis at, congue in purus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus tempor lectus vitae neque
              imperdiet, accumsan vestibulum tellus pharetra. Integer nec purus
              in diam tempus semper efficitur ut elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce suscipit turpis id neque facilisis feugiat non vel massa.
              Cras quis porttitor ipsum. Curabitur interdum massa vel dapibus
              aliquam. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Aliquam ac vulputate dolor,
              at aliquet leo. Integer porta nisl eu ante feugiat, vel eleifend
              enim eleifend. Curabitur vel lectus non arcu eleifend laoreet eget
              vitae dolor. Ut nec tortor aliquet, consectetur odio id, volutpat
              dui. Suspendisse ante dolor, mollis eget augue in, aliquam
              pellentesque diam. Curabitur dignissim lorem eu est malesuada
              mollis. Nullam molestie leo ac eros sagittis posuere. Morbi
              ultrices porttitor ipsum id porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec non leo est. Cras lobortis eros
              vitae nibh sagittis, et dignissim nibh luctus. Nam nec justo
              consequat, rhoncus felis id, vestibulum sem. In commodo tristique
              orci, non faucibus orci condimentum in. Integer fringilla lectus
              eu malesuada auctor. Donec a lacus id enim cursus accumsan ac
              ultricies risus. Duis non risus at nisi gravida aliquam. In enim
              felis, imperdiet in maximus id, laoreet et massa. Aenean
              vestibulum libero mauris, id posuere dui gravida quis. Nam euismod
              sit amet nisl ac luctus. Pellentesque a feugiat erat, vitae
              volutpat sem. Vivamus non nisl egestas, dignissim dolor et,
              tristique purus. Ut id urna aliquet felis fringilla dapibus quis
              quis neque. Morbi dignissim varius nunc non cursus. Quisque
              vestibulum vel arcu feugiat fringilla. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Phasellus et ante dignissim, convallis eros ultrices, feugiat
              ante. Donec finibus lobortis tellus, quis iaculis risus eleifend
              nec. Sed blandit aliquet erat. Vivamus vel velit rutrum, bibendum
              eros in, sagittis erat. Cras ac scelerisque justo, eleifend
              convallis erat. Nullam vel lacinia velit. Sed laoreet, dolor id
              tristique blandit, leo dui condimentum lorem, sit amet convallis
              nulla risus vel justo. Maecenas nec metus sit amet leo egestas
              congue. Sed lobortis rhoncus venenatis. Duis eget felis
              scelerisque, viverra lectus at, finibus nulla. Aenean eget
              porttitor sapien. Fusce sit amet turpis vulputate neque molestie
              ullamcorper at ut metus. Mauris mi nulla, suscipit sit amet purus
              eu, tincidunt eleifend est. Vivamus id risus eget libero iaculis
              elementum. Suspendisse nec ultrices lorem. Curabitur mollis
              aliquet turpis, eu lacinia mauris semper vitae. Praesent dignissim
              feugiat diam, non sodales felis scelerisque in. Vivamus
              pellentesque et lacus quis egestas. Suspendisse eleifend augue
              lacus, in ultrices urna lobortis posuere. Cras rhoncus arcu id
              placerat vestibulum. Quisque euismod accumsan elit at hendrerit.
              Nunc blandit eget tellus id rutrum. In enim neque, volutpat a
              tortor at, laoreet mollis dolor. Pellentesque dapibus ut urna non
              egestas. Pellentesque fermentum diam non consectetur dignissim.
              Suspendisse elit eros, facilisis non sem ac, bibendum fermentum
              mi. Vivamus lobortis quis urna ut faucibus. Nulla tempor egestas
              urna eu sollicitudin. Pellentesque congue rutrum ex et
              condimentum. In dolor augue, lobortis nec mattis a, laoreet
              imperdiet elit. Mauris vitae felis pretium, consequat elit quis,
              dapibus dolor. Nulla facilisi. Vestibulum tincidunt massa semper
              ex eleifend sollicitudin. Etiam auctor fermentum nibh, id
              tristique quam placerat vitae. Proin iaculis placerat sodales.
              Nunc a eros id elit auctor porttitor in sed risus. Maecenas sed
              neque sed sapien sodales pellentesque nec et justo. Nunc eget
              dolor vestibulum, consequat orci at, volutpat diam. Fusce tempus
              sem a urna malesuada vulputate. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Etiam ac ex tortor. Duis varius elementum risus, vitae euismod
              metus. Integer sed tristique metus. Ut tincidunt facilisis est sed
              posuere. Sed pretium ante elementum risus auctor, sed pulvinar
              turpis rhoncus. Curabitur id eros tincidunt, cursus nunc quis,
              molestie tellus. Donec vehicula accumsan purus, non scelerisque
              tellus pellentesque nec. Praesent convallis non ipsum sit amet
              maximus. Cras urna lorem, tincidunt non dolor eget, dignissim
              pretium mi. Nam imperdiet, libero in faucibus bibendum, mauris
              magna blandit metus, nec mollis lectus dolor id leo. In a eros
              risus. Etiam nec mattis orci, at auctor purus. Maecenas vehicula
              magna a augue dictum, sed interdum lacus pulvinar. Ut nec placerat
              sem. Suspendisse potenti. Aenean elementum libero vitae enim
              tincidunt, vitae dignissim erat malesuada. Donec ac dapibus velit.
              Nullam blandit auctor purus sed hendrerit. Mauris bibendum dapibus
              erat, suscipit fermentum ligula efficitur in. Praesent pulvinar
              lobortis sagittis. Donec volutpat quam ut ante imperdiet ultrices.
              Aenean eu quam vel arcu commodo mollis. Vivamus non pellentesque
              urna. Nunc in efficitur lacus. Maecenas efficitur vitae massa
              vitae tempor. Nam id consectetur nulla, et volutpat elit. Aliquam
              ipsum lectus, pretium sed feugiat non, hendrerit quis erat. Sed
              diam nisl, dictum et lorem id, dignissim pretium urna. Donec
              tempor elit mi. Fusce tincidunt finibus eros, viverra fringilla
              libero tincidunt ut. Donec euismod enim at ligula egestas iaculis.
              Aenean ultricies feugiat rutrum. Sed mattis euismod luctus. Duis
              porta pharetra diam sed aliquam. Nulla facilisi. Nulla sapien
              nibh, ullamcorper venenatis volutpat sed, dapibus et risus. Sed
              blandit, mi in tempor consectetur, est nunc sollicitudin neque, eu
              faucibus massa sapien ut ligula. Nam ex arcu, ultrices id dapibus
              sed, suscipit et mi. Cras nisi nulla, fringilla eget orci eget,
              pretium vulputate mauris. Morbi et elementum eros. Vestibulum
              imperdiet magna ac quam placerat finibus. Sed varius vitae nisi
              nec semper. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum mattis tellus sit amet volutpat tempor. Aenean
              sed porttitor libero, varius vestibulum metus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Pellentesque ultrices fringilla neque vitae facilisis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Etiam consequat metus arcu, ac
              dictum felis gravida non. Duis nunc ipsum, sodales sed metus eget,
              accumsan vulputate velit. Vivamus malesuada dolor risus, quis
              egestas felis rhoncus ut. Nullam vel metus suscipit dui venenatis
              tincidunt nec vel neque. Maecenas finibus diam vel orci efficitur,
              a rutrum nisi accumsan. Phasellus faucibus urna odio, quis
              scelerisque arcu consectetur sed. Aliquam ultrices nulla et orci
              vulputate dictum. Phasellus ultricies lorem non efficitur
              pulvinar. Quisque urna velit, fringilla sed aliquam ut, dignissim
              a eros. Vivamus dignissim, tellus vitae bibendum ultrices, magna
              dui blandit leo, in mattis ligula diam quis erat. In quis mi ac
              erat elementum sagittis. In eros quam, feugiat faucibus velit et,
              cursus vulputate nibh. Maecenas mattis enim eu placerat
              pellentesque. Proin fringilla diam ipsum, vel ullamcorper risus
              accumsan eu. Aenean id lacus sit amet justo elementum rutrum id eu
              justo. Suspendisse ac viverra ante, ut ornare ipsum. Curabitur et
              tincidunt ex. Ut sagittis lacinia libero. Ut egestas odio eget
              justo aliquam, id auctor nisi convallis. In vel nulla in nunc
              venenatis interdum. Nunc eget urna erat. In hac habitasse platea
              dictumst. Etiam sodales odio ut nulla lacinia, non vestibulum
              tellus porta. Duis lectus erat, finibus sed risus a, egestas
              molestie ipsum. Donec id libero venenatis, euismod augue non,
              feugiat lorem. Integer non pharetra elit, sed hendrerit leo.
              Integer non ex posuere, sagittis turpis ac, hendrerit sapien.
              Mauris quam lectus, eleifend a tempus eu, viverra id metus.
              Vivamus eros nulla, ultricies ut sagittis at, congue in purus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus tempor lectus vitae neque
              imperdiet, accumsan vestibulum tellus pharetra. Integer nec purus
              in diam tempus semper efficitur ut elit. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce suscipit turpis id neque facilisis feugiat non vel massa.
              Cras quis porttitor ipsum. Curabitur interdum massa vel dapibus
              aliquam. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Aliquam ac vulputate dolor,
              at aliquet leo. Integer porta nisl eu ante feugiat, vel eleifend
              enim eleifend. Curabitur vel lectus non arcu eleifend laoreet eget
              vitae dolor. Ut nec tortor aliquet, consectetur odio id, volutpat
              dui. Suspendisse ante dolor, mollis eget augue in, aliquam
              pellentesque diam. Curabitur dignissim lorem eu est malesuada
              mollis. Nullam molestie leo ac eros sagittis posuere. Morbi
              ultrices porttitor ipsum id porta. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec non leo est. Cras lobortis eros
              vitae nibh sagittis, et dignissim nibh luctus. Nam nec justo
              consequat, rhoncus felis id, vestibulum sem. In commodo tristique
              orci, non faucibus orci condimentum in. Integer fringilla lectus
              eu malesuada auctor. Donec a lacus id enim cursus accumsan ac
              ultricies risus. Duis non risus at nisi gravida aliquam. In enim
              felis, imperdiet in maximus id, laoreet et massa. Aenean
              vestibulum libero mauris, id posuere dui gravida quis. Nam euismod
              sit amet nisl ac luctus. Pellentesque a feugiat erat, vitae
              volutpat sem. Vivamus non nisl egestas, dignissim dolor et,
              tristique purus. Ut id urna aliquet felis fringilla dapibus quis
              quis neque. Morbi dignissim varius nunc non cursus. Quisque
              vestibulum vel arcu feugiat fringilla. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Phasellus et ante dignissim, convallis eros ultrices, feugiat
              ante. Donec finibus lobortis tellus, quis iaculis risus eleifend
              nec. Sed blandit aliquet erat. Vivamus vel velit rutrum, bibendum
              eros in, sagittis erat. Cras ac scelerisque justo, eleifend
              convallis erat.
            </p>

            <div className="flex items-center mt-6">
              <div className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full">
                Publicado por: Nombre del Usuario
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;
