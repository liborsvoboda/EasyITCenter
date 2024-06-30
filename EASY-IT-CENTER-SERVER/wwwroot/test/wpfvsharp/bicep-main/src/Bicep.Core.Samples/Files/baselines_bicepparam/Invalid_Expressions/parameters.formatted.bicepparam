using 'main.bicep'

param testAny = any('foo')
param testArray = array({})
param testBase64ToString = base64ToString(concat(base64('abc'), '@'))
param testBase64ToJson = base64ToJson(base64('{"hi": "there"')).hi
param testBool = bool('sdf')
param testConcat = concat(['abc'], { foo: 'bar' })
param testContains = contains('foo/bar', {})
param testDataUriToString = dataUriToString(concat(dataUri('abc'), '@'))
param testDateTimeAdd = dateTimeAdd(dateTimeFromEpoch(1680224438), 'PTASDIONS1D')
param testDateTimeToEpoch = dateTimeToEpoch(dateTimeFromEpoch('adfasdf'))
param testEmpty = empty([])
param testEndsWith = endsWith('foo', [])
param testFilter = filter([1, 2], i => i < 'foo')
param testFirst = first('asdfds')
param testFlatten = flatten({ foo: 'bar' })
param testFormat = format('->{123}<-', 123)
param testGuid = guid({})
param testIndexOf = indexOf('abc', {})
param testInt = int('asdf')
param testIntersection = intersection([1, 2, 3], 'foo')
param testItems = items('asdfas')
param testJoin = join(['abc', 'def', 'ghi'], {})
param testLast = last('asdf')
param testLastIndexOf = lastIndexOf('abcba', {})
param testLength = length({})
param testLoadFileAsBase64 = loadFileAsBase64('test.txt')
param testLoadJsonContent = loadJsonContent('test.json').adsfsd
param testLoadTextContent = loadTextContent('test.txt')
param testMap = map(range(0, 3), i => dataUriToString('Hi ${i}!'))
param testMax = max(1, 2, '3')
param testMin = min(1, 2, {})
param testPadLeft = padLeft(13, 'foo')
param testRange = range(0, 'foo')
param testReduce = reduce(['a', 'b', 'c'], '', (a, b) => '${toObject(a)}-${b}')
param testReplace = replace('abc', 'b', {})
param testSkip = skip([1, 2, 3], '1')
param testSort = sort(['c', 'd', 'a'], (a, b) => a + b)
param testSplit = split('a/b/c', 1 + 2)
param testStartsWith = startsWith('abc', {})
param testString = string({})
param testSubstring = substring('asdfasf', '3')
param testTake = take([1, 2, 3], '2')
param testToLower = toLower(123)
param testToObject = toObject(['a', 'b', 'c'], x => { x: x }, x => 'Hi ${x}!')
param testToUpper = toUpper([123])
param testTrim = trim(123)
param testUnion = union({ abc: 'def' }, [123])
param testUniqueString = uniqueString('asd', 'asdf', 'asdf')
param testUri = uri('github.com', 'Azure/bicep')
param testUriComponent = uriComponent(123)
param testUriComponentToString = uriComponentToString({})

param myObj = {
  newGuid: newGuid()
  utcNow: utcNow()
  resourceId: resourceId('Microsoft.ContainerService/managedClusters', 'blah')
  deployment: deployment()
  environment: environment()
  azNs: az
  azNsFunc: az.providers('Microsoft.Compute')
}
