function Youtubepopup() {
    return (
    <div class="w-[450px] h-screen bg-white border-l border-gray-200 overflow-y-auto text-sm text-gray-900 select-none">
  <div class="sticky top-0 bg-white flex items-center justify-between p-4 border-b border-gray-100 z-10">
    <h2 class="text-xl font-semibold">Notifications</h2>
    <button class="p-2 hover:bg-gray-100 rounded-full text-gray-700">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </button>
  </div>

  <div class="divide-y divide-gray-50">
    <div class="flex items-start gap-3 p-4 bg-gray-100/70 hover:bg-gray-100 cursor-pointer relative">
      <div class="w-2 flex-shrink-0"></div>
      <img src="https://picsum.photos/id/1012/100/100" alt="Avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
      <div class="flex-1 pr-2">
        <p class="font-normal text-gray-900 leading-snug line-clamp-3">
          PUBG MOBILE Esports is live: [EN] PMWC at EWC 26 Finals D2 | PUBG MOBILE WORLD CUP at 2026 ESPORTS WORLD CUP
        </p>
        <span class="text-xs text-gray-500 mt-2 block">10 days ago</span>
      </div>
      <img src="https://picsum.photos/id/1005/160/90" alt="Thumbnail" class="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
      <button class="p-1 text-gray-600 hover:bg-gray-200 rounded-full flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>

    <div class="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer relative">
      <span class="w-2 h-2 rounded-full bg-blue-600 self-center -ml-2 flex-shrink-0"></span>
      <img src="https://picsum.photos/id/1025/100/100" alt="Avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
      <div class="flex-1 pr-2">
        <p class="font-normal text-gray-900 leading-snug line-clamp-2">
          Recommended: Admin is delulu.
        </p>
        <span class="text-xs text-gray-500 mt-2 block">13 days ago</span>
      </div>
      <img src="https://picsum.photos/id/1011/160/90" alt="Thumbnail" class="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
      <button class="p-1 text-gray-600 hover:bg-gray-200 rounded-full flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>

    <div class="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer relative">
      <span class="w-2 h-2 rounded-full bg-blue-600 self-center -ml-2 flex-shrink-0"></span>
      <img src="https://picsum.photos/id/1062/100/100" alt="Avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
      <div class="flex-1 pr-2">
        <p class="font-normal text-gray-900 leading-snug line-clamp-3">
          The Hindu is live: AAP chief Arvind Kejriwal leads march to PM Modi's residence over E20 petrol
        </p>
        <span class="text-xs text-gray-500 mt-2 block">3 weeks ago</span>
      </div>
      <img src="https://picsum.photos/id/1015/160/90" alt="Thumbnail" class="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
      <button class="p-1 text-gray-600 hover:bg-gray-200 rounded-full flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>

    <div class="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer relative">
      <span class="w-2 h-2 rounded-full bg-blue-600 self-center -ml-2 flex-shrink-0"></span>
      <img src="https://picsum.photos/id/1074/100/100" alt="Avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
      <div class="flex-1 pr-2">
        <p class="font-normal text-gray-900 leading-snug line-clamp-3">
          BigBaat is live: Re-Stream 4Thrives Live Q&A from Walee HQ | EWC Send Off Event
        </p>
        <span class="text-xs text-gray-500 mt-2 block">3 weeks ago</span>
      </div>
      <img src="https://picsum.photos/id/1020/160/90" alt="Thumbnail" class="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
      <button class="p-1 text-gray-600 hover:bg-gray-200 rounded-full flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>

    <div class="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer relative">
      <span class="w-2 h-2 rounded-full bg-blue-600 self-center -ml-2 flex-shrink-0"></span>
      <img src="https://picsum.photos/id/1084/100/100" alt="Avatar" class="w-12 h-12 rounded-full object-cover flex-shrink-0" />
      <div class="flex-1 pr-2">
        <p class="font-normal text-gray-900 leading-snug line-clamp-2">
          BigBaat is live: Esports World Cup 2026 Live Stream | BigBaat
        </p>
        <span class="text-xs text-gray-500 mt-2 block">3 weeks ago</span>
      </div>
      <img src="https://picsum.photos/id/1043/160/90" alt="Thumbnail" class="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
      <button class="p-1 text-gray-600 hover:bg-gray-200 rounded-full flex-shrink-0">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </button>
    </div>
  </div>
</div>
    )
}

export default Youtubepopup;