function Hoverpopup() {
  return (
    <div class="w-64 bg-white border border-gray-200 rounded-md shadow-lg p-4 text-xs font-sans text-gray-800 select-none">
      <p class="text-gray-500 mb-3">Change language</p>

      <div class="space-y-3">
        <label class="flex items-center gap-2 cursor-pointer font-semibold text-gray-900">
          <input
            type="radio"
            name="language"
            checked
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>English - EN</span>
        </label>

        <div class="border-b border-gray-100 my-2"></div>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>español - ES</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>العربية - AR</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>Deutsch - DE</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>עברית - HE</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>한국어 - KO</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>português - PT</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>中文 (简体) - ZH</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="language"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>中文 (繁體) - ZH</span>
        </label>
      </div>

      <div class="border-b border-gray-200 my-3"></div>

      <p class="text-gray-500 mb-3">Change currency</p>

      <div class="space-y-3">
        <label class="flex items-center gap-2 cursor-pointer font-semibold text-gray-900">
          <input
            type="radio"
            name="currency"
            checked
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>PKR - Pakistani Rupee</span>
        </label>

        <label class="flex items-center gap-2 cursor-pointer hover:text-orange-600">
          <input
            type="radio"
            name="currency"
            class="w-4 h-4 accent-orange-600 border-gray-300 focus:ring-0 cursor-pointer"
          />
          <span>$ - USD - US Dollar</span>
        </label>
      </div>

      <a
        href="#"
        class="inline-block mt-2 text-blue-600 hover:text-orange-600 hover:underline"
      >
        See all
      </a>

      <div class="border-b border-gray-200 my-3"></div>

      <div class="flex items-start gap-2 text-gray-700">
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="US Flag"
          class="w-4 h-3 mt-0.5 object-cover"
        />
        <div>
          <p>
            You are shopping on <br />
            <span class="font-medium text-gray-900">Amazon.com</span>
          </p>
        </div>
      </div>

      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 hover:text-orange-600 hover:underline">
          Change country/region.
        </a>
      </div>
    </div>
  );
}

export default Hoverpopup;
