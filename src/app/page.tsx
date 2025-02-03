import Image from 'next/image';
import freedomIsNotFree from '@/../public/freedomisnotfree.webp';
import rallyPeople from '@/../public/rallypeople.webp';
import chillMKFA from '@/../public/chillmkfa.webp';
import caps from '@/../public/caps.webp';
import mkfacap from '@/../public/mkfacap.png';

export default function Home() {
  return (
    <div>
      <Image src={freedomIsNotFree} alt="freedom is not free" />
      <h1 className="font-bold text-4xl text-center mt-5">
        MAKE KORE
        <br />
        <span className="text-[#e61e2b]">FREE</span> AGAIN
      </h1>
      <p className="text-center mt-5">
        자유 대한민국을 꿈꾸는
        <br />
        MKFA 집회 정보 포털에 오신 것을
        <br />
        환영합니다.
      </p>
      <div className="group relative overflow-hidden mt-5">
        <div className="z-10 absolute inset-0 bg-black/50 flex items-center justify-center transition duration-300 group-hover:bg-black/70">
          <span className="text-white text-3xl">전국 집회 일정 보러가기</span>
        </div>
        <Image
          src={rallyPeople}
          alt="go to see rally schedule"
          className="max-h-52 object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div className="bg-[#e61e2b] w-fit py-2 px-7 mt-12 mx-auto">
        <span className="text-white font-bold text-xl">
          MKFA 커뮤니티 모집 중!!!
        </span>
      </div>
      <Image
        src={chillMKFA}
        alt="chill MKFA"
        className="w-[calc(100vw-48px)] mx-auto mt-5"
      />
      <h2 className="font-bold text-xl ml-6 mt-5">
        지금 커뮤니티에 참여하면
        <br />
        추첨을 통해 MKFA 모자를 드립니다
      </h2>
      <Image
        src={caps}
        alt="caps"
        className="mt-1 w-[calc(100vw-48px)] mx-auto"
      />
      <ol className="w-[calc(100vw-48px)] mx-auto mt-2">
        <li>
          <h3 className="font-bold text-md">
            1. MKFA 커뮤니티는 오로지 믿을 수 있는 후원자 분들을 대상으로
            합니다.
          </h3>
          <p className="text-sm">
            좌파 쁘락치들로부터 자유롭게 활동하고 서로를 믿을 수 있도록, MKFA
            후원자 분들만 참여가 가능합니다.
          </p>
        </li>
        <li className="mt-3">
          <h3 className="font-bold text-md">
            2. 상시로 커뮤니티에서 우파 집회 번개 모임을 주선하여 더 영향력 있게
            행동합니다.
          </h3>
          <p className="text-sm">
            민주당 주도의 카톡 검열 및 고소/고발 난발로 인해 카카오톡이 아닌
            텔레그램 방을 운영 중입니다.
          </p>
        </li>
        <li className="mt-3">
          <h3 className="font-bold text-md">
            3. 좌편향된 언론보도에 맞서 팩트에 기반한 옳은 정보만을 취급합니다.
          </h3>
          <p className="text-sm">
            MBC, JTBC 등 좌경화된 뉴스가 아닌, 팩트 기반의 뉴스를 전달합니다.
          </p>
        </li>
        <li className="mt-3">
          <h3 className="font-bold text-md">
            4. 수익금의 10%는 대한민국의 자유를 위해 죽음까지 불사한 6.25
            참전유공자회에 기부됩니다.
          </h3>
          <p className="text-sm">
            우리보다 앞서 자유를 지키기 위해 싸워온 선배님들의 대한 존경과
            감사를 담아 커뮤니티를 운영하고자 합니다.
          </p>
        </li>
      </ol>
      <div className="w-fit bg-black p-2 mx-auto mt-5">
        <span className="font-bold text-white">
          일주일 한정! 무료로 MKFA 커뮤니티 참여하기
        </span>
      </div>
      <div className="w-fit mx-auto">
        <Image src={mkfacap} alt="MKFA Cap" className="w-24 mx-auto mt-16" />
        <div className="mt-3 font-bold text-center">MKFA 쇼핑몰 바로 가기</div>
      </div>
      <footer className="bg-[#e61e2b] h-64 mt-10"></footer>
    </div>
  );
}
